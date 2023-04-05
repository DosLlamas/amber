import React, { useState } from "react";
import logo from "./assets/gadget2.png";
const url = chrome.runtime.getURL(logo);

function TimeForm({ setShow, handleTimer, setHandleTimer }) {
  const handleBack = (e) => {
    e.preventDefault();
    setShow("showIntention.jsx");
  };
  const [minutes, setMinutes] = useState(0);

  const handleContinueSubmit = (e) => {
    e.preventDefault();
    if (minutes === 0) {
      alert("Choose a time :)");
    } else {
      chrome.storage.sync.set({
        minutes: minutes,
      });

      setHandleTimer(!handleTimer);
    }
  };
  return (
    <div className="timeframe">
      <div className="exampleTime">
        How much time do you want to spend?
        <div className="timeoverlay">
          <img src={url} />
        </div>
      </div>
      <div className="timeBtns">
        <form onSubmit={handleContinueSubmit}>
          <div className="radio-btns">
            <button
              className="button-21"
              type="button"
              checked={false}
              onClick={(e) => setMinutes(4)}
            >
              4 min
            </button>
            <button
              className="button-20"
              type="button"
              checked={false}
              onClick={(e) => setMinutes(12)}
            >
              12 min
            </button>
            <button
              className="button-19"
              type="button"
              checked={false}
              onClick={(e) => setMinutes(36)}
            >
              36 min
            </button>
          </div>
          <div className="navigateApp">
            <input
              onClick={handleBack}
              className="continue"
              type="submit"
              value="Back"
            />
            <input className="time-continue" type="submit" value="Continue" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default TimeForm;
