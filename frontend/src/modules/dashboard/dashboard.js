import React, { Component } from 'react';
import BeerService from '../../services/beer/beer-service';

const beerService = BeerService();

class Dashboard extends Component {
  beersTemperature;
  apiResult;
  error = null;
  repeatInterval;

  componentDidMount() {
    this.init();
  }

  init = async () => {
    this.repeatInterval = setInterval(() => this.setState(this.getTemperatures()), 5000);
    this.getTemperatures();
  }

  getTemperatures = async () => {
    this.error = null;
    try {      
      var tempBeersTemperature = await beerService.getBeerTemperatures();
      this.beersTemperature = tempBeersTemperature.map(k => {
        return {
          name: k.beer.name,
          min: k.beer.minTemperature,
          max: k.beer.maxTemperature,
          currentTemperature: k.temperature.currentTemperature,
          class: k.outsideRange ? 'danger' : 
            (k.temperature.currentTemperature === k.beer.minTemperature ||
              k.temperature.currentTemperature === k.beer.maxTemperature ? 
              'warning' : 'success')
        };
      });
    } catch (error) {
      this.error = error.message;
      clearInterval(this.repeatInterval);
    }
    this.setState({ response: this.beersTemperature });
  }

  render() {
    return (
      <div className="dashboard-container p-1 text-center">
        <div>
          <span className="btn btn-dark btn-lg btn-block mb-3">
            Beer Temperatures
          </span>
        </div>
        <div>
          <div>
            <button className={`btn btn-info${this.error ? '' : ' d-none'}`} onClick={this.init}>Update Temperatures</button>
          </div>
          {this.error}
        </div>
        <div>
          <BeerTemperatureList beersTemperature={this.beersTemperature} />
        </div>
      </div>
    );
  }
}

function BeerTemperatureList(props) {
  if (!props || !props.beersTemperature) return '';
  const beersTemperature = props.beersTemperature;
  if (!beersTemperature.length) return '';  
  console.log('beersTemperature', beersTemperature);

  const listItems = beersTemperature.map((beerTemp, index) =>
    <div className="col-sm-6 col-md-4 p-4" key={index.toString()}>
      <span className="w-100 btn btn-dark btn-lg">
        {beerTemp.name}
        <span className={`ml-2 badge badge-pill badge-${beerTemp.class}`}>{beerTemp.currentTemperature} º</span>
      </span>
      <span className="w-100 btn btn-outline-secondary">
        min:{beerTemp.min}º - max:{beerTemp.max}º
      </span>
    </div>
  );
  return (
    <div className="row">{listItems}</div>
  );
}

export default Dashboard;
