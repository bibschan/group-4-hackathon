import React from "react";

class Form extends React.Component{
  constructor(props){
    super();
    this.state = {
      tweet: "",
    };
  }
  

  updateState = (event) => {
    event.preventDefault();
    this.setState({
      tweet: event.target.value,
    });
  }

  render() {
    return (
      <div className="tweet-form">
        <form onSubmit={() => this.props.handleClick(this.state.tweet)}>
        
        <div className="tweet-form__input">
          <p className="tweet-form__input--preview">Your tweet</p>
          <input
            className="tweet-form__input--comment"
            type="text"
            value={this.state.tweet}
            onChange={this.updateState}
            placeholder="Add your comment here"
          />
        </div>
        <button
          className="btn tweet-form-input__submit"
          type="submit"
        >
          SUBMIT
        </button>
        </form>
      </div>
    );
  }
}

export default Form;
