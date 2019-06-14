import React, {Component} from 'react';

class App extends Component {
    state = {
      response: ''
    };
  
    componentDidMount() {
      this.callApi()
        .then(res => this.setState({ response: res }))
        .catch(err => console.log('err', err));
    }
  
    callApi = async () => {
      const response = await fetch('/home');
      const body = await response.json();
      if (response.status !== 200) throw Error(body.message);
      return body;
    };
  
    render() {
      return (
        <div>
          <p>{this.state.response}</p>
        </div>
      );
    }
  }

export default App;
