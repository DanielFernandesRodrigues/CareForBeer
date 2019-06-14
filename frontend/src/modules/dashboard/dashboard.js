import React, { Component } from 'react';
import BeerService from '../../services/beer/beer-service';

const beerService = BeerService();

class Dashboard extends Component {
  beersTemperature;
  apiResult;
  error = null;

  componentDidMount() {
    this.getTemperatures();
  }

  getTemperatures = async () => {
    this.error = null;
    try {      
      this.beersTemperature = await beerService.getBeerTemperatures();
    } catch (error) {
      this.error = error.message;
      this.beersTemperature = [];
    }
    this.setState({ response: this.beersTemperature });
  }

  render() {
    return (
      <div className="dashboard-container p-1 text-center">
        <div>
          <span className="btn btn-outline-dark btn-lg btn-block mb-3">
            Beer Temperatures
          </span>
        </div>
        <div>
          <button className="btn btn-info" onClick={this.getTemperatures}>Update Temperatures</button>
        </div>
        <div>
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
      <span className={`w-100 ${beerTemp.outsideRange ? 'btn btn-danger' : 'btn btn-success'}`}>
      </span>
      <span className="w-100 btn btn-secondary btn-lg">
        {beerTemp.beer.name} - {beerTemp.temperature.currentTemperature} º
      </span>
      <span className="w-100 btn btn-outline-secondary">
        min:{beerTemp.beer.minTemperature}º - max:{beerTemp.beer.maxTemperature}º
      </span>
    </div>
  );
  return (
    <div className="row">{listItems}</div>
  );
}

export default Dashboard;
