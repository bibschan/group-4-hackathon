import React, {Component} from 'react';
import axios from 'axios';
// import {v4 as uuidv4} from 'uuid';
import Tweet from './components/tweet';
import './scss/App.css';

class App extends Component {
  state = {
    tweet: [],
  }

  componentDidMount() {
    this.getTweetData();
  }

  getTweetData() {
    axios.get(`http://localhost:8080/tweets`)
    .then((response) => {
      // console.log(response);
      const {data} = response;
      this.setState({
        tweet: data,
      });
      // console.log(this.state.tweet);
    })
    .catch((error) => console.log(error));
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
