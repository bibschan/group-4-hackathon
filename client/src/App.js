import React, {Component} from 'react';
import axios from 'axios';
// import {v4 as uuidv4} from 'uuid';
import Tweet from './components/tweet';
import './scss/App.css';

class App extends Component {
  state = {
    tweet: {},
  }

  getTweetData() {
    axios.get(`http://localhost:8080/`)
    .then((response) => {
      const {data} = response;
      this.setState({
        tweet: data,
      });
    })
  }

  render() {

    return (
      <div className="app">
          <Tweet tweets={this.state.tweet} />
      </div>
    );
  }
}

export default App;
