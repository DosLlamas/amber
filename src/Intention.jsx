import React, { useState } from "react";
import "fomantic-ui-css/semantic.css";
import logo from "./assets/laptopbg.png";
const url = chrome.runtime.getURL(logo);

const Intention = ({ setShow }) => {
  let savedIntention = "";
  chrome.storage.sync.get(["intention"], (result) => {
    savedIntention = result.intention;
  });
  const [submitIntention, setSubmitIntention] = useState(savedIntention);

  const handleContinue = (e) => {
    e.preventDefault();
    chrome.storage.sync.set({
      intention: submitIntention,
    });
    setShow("showTimeScreen");
  };

  return (
    <div className="intentionframe">
      <div className="example">
        What is your intention?
        <div className="overlay">
          <img src={url} />
        </div>
      </div>
      <form onSubmit={handleContinue}>
        <div className="intention-area">
          <textarea
            className="writeIntention"
            required
            type="text"
            autoFocus
            value={submitIntention}
            placeholder="Write intention"
            onChange={(e) => setSubmitIntention(e.target.value)}
          ></textarea>
        </div>
        <div>
          <input className="continue" type="submit" value="Continue" />
        </div>
      </form>
    </div>
  );
};

export default Intention;
