import React, { useState } from "react"
import 'fomantic-ui-css/semantic.css';
import { Container, Header } from 'semantic-ui-react';
import Intention from "./Intention.jsx"
// import Time from "./Time.jsx"
import "./App.css"
import logo from "./assets/laptopbg.png";
const url = chrome.runtime.getURL(logo);


// dim the brightness on everything except amber app
const transitionTime = 3;
const handleScroll = document.body;
handleScroll.style.overflow = "hidden";
const everyDiv = document.body.children;
for (const child of everyDiv) {
  if (child.id != "amber-app") {
    child.style.transitionProperty = "opacity";
    child.style.transitionDuration = transitionTime + "s";
    child.style.opacity = 0.1;
  }
}
const App = () => {
    const test = [1];
    const [handleContinue, setHandleContinue] = useState("ShowIntentionScreen")
    const [handleTimer, setHandleTimer] = useState(false);
    // 
    const showComponent = test.map((show) => {
        if (handleContinue == "ShowIntentionScreen") {
          return <Intention key="Intention.jsx" setShow={setHandleContinue} />;
        } else if (handleContinue == "ShowTimeScreen") {
          return (
            <TimeForm
              key="Time.jsx"
              show={handleContinue}
              setShow={setHandleContinue}
              handleTimer={handleTimer}
              setHandleTimer={setHandleTimer}
            />
          );
        }
      });
    const opacity = () => {
        handleScroll.style.overflow = "visible";
    
        const opacityChange = document.body.children;
    
        for (const child of opacityChange) {
          if (child.id != "amber-app") {
            child.style.transitionProperty = "opacity";
            child.style.transitionDuration = transitionTime + "s";
            child.style.opacity = 1;
          }
        }
        for (const child of opacityChange) {
          if (child.id == "amber-app") {
            child.remove();
          }
        }
        const SCREEN_DECAY_TIME = 7;
        const SCROLL_LIMIT = 12000;
        const FLASH_INTERVAL = 400;
        let scrollDistance = 0;
        let warningOn = false;
        let warningEnabled = false;
    
        let flashID;
        const warning = document.createElement("div");
        warning.id = "doomscroll";
        warning.style =
          "height: 100%; position: fixed; width: 100%; z-index: 9000; display: flex; justify-content: center; flex-direction: column; color: #fae091; font-weight: bolder; text-align: center; font-size: 7vw; z-index: 9000; transition-property: opacity; transition-duration: 0.3s";
        warning.innerText = "mindfulness :)";
    
        addEventListener("scroll", (e) => {
          const scrollDelta = document.documentElement.scrollTop - scrollDistance;
          scrollDistance = document.documentElement.scrollTop;
    
          if (scrollDelta > 0) {
            if (!warningEnabled && scrollDistance > SCROLL_LIMIT) {
              warningEnabled = true;
    
              document.body.insertAdjacentElement("afterbegin", warning);
    
              const children = document.body.children;
              for (const child of children) {
                if (child.id != "doomscroll") {
                  child.style.opacity = 1;
                  child.style.transitionProperty = "opacity";
                  child.style.transitionDuration = SCREEN_DECAY_TIME + "s";
                }
              }
    
              flashID = setInterval(() => {
                displayWarning();
              }, FLASH_INTERVAL);
    
              for (const child of children) {
                if (child.id != "doomscroll") child.style.opacity = 0;
              }
    
              const t = setTimeout(() => {
                clearInterval(flashID);
                clearTimeout(t);
              }, SCREEN_DECAY_TIME * 1000);
            }
          }
        });
    
        const displayWarning = () => {
          if (!warningOn) {
            warning.style.opacity = 1;
          } else {
            warning.style.opacity = 0;
          }
          warningOn = !warningOn;
        };
      }
    return (
        <div className="App">
            {handleTimer ? opacity() : showComponent}
        </div>
    )
}
export default App;
