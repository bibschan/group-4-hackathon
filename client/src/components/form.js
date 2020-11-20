import React from "react";

export default function Form() {
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
          className="tweet-form__input--comment"
          type="text"
          placeholder="Add your comment here"
        />
      </div>
      <button className="btn tweet-form-input__cancel">CANCEL</button>
      <button className="btn tweet-form-input__submit">SUBMIT</button>
    </div>
  );
}
