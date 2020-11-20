import React from "react";

class Form {
  state = {
    tweet: "",
  };
  updateState(event) {
    this.setState({
      tweet: event.target.value,
    });
  }

  render() {
    return (
      <div className="tweet-form">
        <div className="tweet-form__input">
          <p className="tweet-form__input--preview">Your name</p>
          <input
            className="tweet-form__input--name"
            type="text"
            placeholder="Your name"
          />
          <p className="tweet-form__input--preview">Your comment</p>
          <input
            id="tweet"
            className="tweet-form__input--comment"
            type="text"
            placeholder="Add your comment here"
          />
        </div>
        <button className="btn tweet-form-input__cancel">CANCEL</button>
        <button
          value={this.state.tweet}
          className="btn tweet-form-input__submit"
          onChange={this.updateState}
          //   onClick={() => props.handleClick(tweet)}
        >
          SUBMIT
        </button>
      </div>
    );
  }
}

export default Form;
