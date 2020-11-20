import React, { Component } from 'react';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import Tweet from './components/tweet';
import Form from './components/form';
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
        const { data } = response;
        this.setState({
          tweet: data,
        });
        // console.log(this.state.tweet);
      })
      .catch((error) => console.log(error));
  }
  handleClick(data) {
    axios({
      method: 'post',
      url: 'http://localhost:8080/tweets',
      data: {
        tweet: data,
      }
    }).then((response) => {
      const { data } = response;
      this.setState({
        id: uuid,
        tweet: data,
      });
      // console.log(this.state.tweet);
    })
      .catch((error) => console.log(error));
  }
  render() {

    return (
      <div className="app">
        <Form handleClick={this.handleClick} />
        <Tweet tweets={this.state.tweet} />

      </div>
    );
  }
}

export default App;
