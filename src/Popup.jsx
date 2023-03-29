import { useState } from "react";
import Monke from "./assets/popupLogo.png";
import "./Popup.css";

function App() {
  // get the time and intention as the user submits the forms to chrome.storage
  const [minutes, setMinutes] = useState(0);
  chrome.storage.sync.get(["minutes"], (result) => {
    setMinutes(result.minutes);
  });

  const [intention, setIntention] = useState("Write an intention :)");
  chrome.storage.sync.get(["intention"], (result) => {
    setIntention(result.intention);
  });

  return (
    <div className="App">
      <div className="amber-logo-container">
        <a
          href="https://chrome.google.com/webstore/detail/amber-mindfulness/hdfdgocligofefcgklikgpjadbphlipm?hl=es-419"
          target="_blank"
        >
          <img src={Monke} alt="Amber Logo" className="amber-logo"></img>
        </a>
      </div>
      <div className="timer-count">{minutes} min</div>
      <hr />
      <div className="intention-banner">
        <p className="intention-banner-content">{intention}</p>
      </div>
      <div className="navbar-container">
        <div className="login-btn">
          <svg width="21" height="21" viewBox="0 0 21 21">
            <path
              d="M16.667 2H4.66699C3.56242 2 2.66699 2.89543 2.66699 4C2.66699 5.10457 3.56242 6 4.66699 6H16.667C17.7716 6 18.667 5.10457 18.667 4C18.667 2.89543 17.7716 2 16.667 2ZM4.66699 0C2.45785 0 0.666992 1.79086 0.666992 4C0.666992 6.20914 2.45785 8 4.66699 8H16.667C18.8761 8 20.667 6.20914 20.667 4C20.667 1.79086 18.8761 0 16.667 0H4.66699ZM8.66699 14H4.66699C3.56242 14 2.66699 14.8954 2.66699 16C2.66699 17.1046 3.56242 18 4.66699 18H8.66699C9.77156 18 10.667 17.1046 10.667 16C10.667 14.8954 9.77156 14 8.66699 14ZM8.66699 20H16.667C18.8761 20 20.667 18.2091 20.667 16C20.667 13.7909 18.8761 12 16.667 12H8.66699H4.66699C2.45785 12 0.666992 13.7909 0.666992 16C0.666992 18.2091 2.45785 20 4.66699 20H8.66699ZM12.1319 18C12.4722 17.4117 12.667 16.7286 12.667 16C12.667 15.2714 12.4722 14.5883 12.1319 14H16.667C17.7716 14 18.667 14.8954 18.667 16C18.667 17.1046 17.7716 18 16.667 18H12.1319Z"
              fill="#d78870"
            ></path>
          </svg>
          <h6 className="settings-login-btn-text">Login</h6>
        </div>
        <div className="login-btn">
          <svg width="21" height="21" viewBox="0 0 21 21" fill="#d78870">
            <circle cx="10.334" cy="10" r="4" fill="white"></circle>
            <path
              d="M19.4623 12.3941L17.765 11.4264C17.9623 10.4586 17.9623 9.53125 17.765 8.56353L19.4623 7.59581C19.6596 7.47484 19.7386 7.23291 19.6596 7.03131C19.2254 5.57973 18.4755 4.28943 17.5281 3.20075C17.3702 3.03946 17.1334 2.99914 16.9361 3.12011L15.2387 4.08783C14.5282 3.483 13.7388 2.99914 12.8704 2.67657V0.70081C12.8704 0.499202 12.7125 0.297594 12.4757 0.257272C11.0152 -0.105622 9.55473 -0.0653007 8.1732 0.257272C7.93636 0.297594 7.81795 0.499202 7.81795 0.70081V2.67657C6.91008 2.99914 6.12064 3.483 5.41014 4.12815L3.71283 3.12011C3.51546 2.99914 3.27863 3.03946 3.12074 3.20075C2.17341 4.28943 1.42343 5.57973 0.989236 7.03131C0.910292 7.23291 0.989236 7.47484 1.1866 7.59581L2.88391 8.56353C2.72602 9.53125 2.72602 10.4586 2.88391 11.4264L1.1866 12.3941C0.989236 12.515 0.910292 12.757 0.989236 12.9586C1.42343 14.4102 2.17341 15.7005 3.12074 16.7891C3.27863 16.9504 3.51546 16.9907 3.71283 16.8698L5.41014 15.9021C6.12064 16.5069 6.91008 16.9907 7.81795 17.3133V19.2891C7.81795 19.4907 7.97584 19.6923 8.1732 19.7729C9.63367 20.0955 11.0942 20.0552 12.4757 19.7729C12.7125 19.6923 12.8704 19.4907 12.8704 19.2891V17.3133C13.7388 16.9907 14.5282 16.5069 15.2387 15.9021L16.9361 16.8698C17.1334 16.9907 17.3702 16.9504 17.5281 16.7891C18.5149 15.7005 19.2254 14.4102 19.6991 12.9586C19.7386 12.757 19.6596 12.515 19.4623 12.3941ZM10.3442 13.2005C8.56792 13.2005 7.18639 11.7893 7.18639 9.97478C7.18639 8.20063 8.56792 6.74905 10.3442 6.74905C12.081 6.74905 13.502 8.20063 13.502 9.97478C13.502 11.7893 12.081 13.2005 10.3442 13.2005Z"
              fill="#d78870"
            ></path>
            <defs>
              <rect
                width="20"
                height="20"
                fill="#48A8A1"
                transform="translate(0.333984)"
              ></rect>
            </defs>
          </svg>
          <h6 className="settings-login-btn-text">Settings</h6>
        </div>
      </div>
      <p className="read-the-docs2">Click on the monke to learn more</p>
    </div>
  );
}

export default App;
