import { useState } from "react";
import Intention from "./Intention.jsx";
import Time from "./Time.jsx";
import "./App.css";

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
function App() {
  const test = [1];
  const [clickContinue, setClickContinue] = useState("showIntention.jsx");
  const [handleTimer, setHandleTimer] = useState(false);

  const showComponent = test.map((show) => {
    if (clickContinue == "showIntention.jsx") {
      return <Intention key="Intention.jsx" setShow={setClickContinue} />;
    } else if (clickContinue == "showTime.jsx") {
      return (
        <Time
          key="Time.jsx"
          show={clickContinue}
          setShow={setClickContinue}
          handleTimer={handleTimer}
          setHandleTimer={setHandleTimer}
        />
      );
    }
  });

  function opacity() {
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

  return <div>{handleTimer ? opacity() : showComponent}</div>;
}

export default App;
