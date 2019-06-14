import React, { Component } from 'react';

class Dashboard extends Component {
  beersTemperature;
  apiResult;

  componentDidMount() {
    this.getTemperatures();
  }

  getTemperatures = async () => {
    this.callApi()
      .then(res => {
        this.beersTemperature = JSON.parse(res);
        this.setState({ response: res });
      })
      .catch(err => console.log('err', err));
  }

  callApi = async () => {
    const response = await fetch('/temperature');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.getTemperatures}>GOL</button>
        <div>
          <h1>Temperatures:</h1>
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

  const listItems = beersTemperature.map((number, index) =>
    <li key={index.toString()}>
      {number.beer.name} - {number.temperature.currentTemperature}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

export default Dashboard;
