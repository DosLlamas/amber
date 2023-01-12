import { useState } from 'react'
import Monke from './assets/popupLogo.png'
import './App.css'

function App() {

  // get the time and intention as the user submits the forms to chrome.storage
  const [minutes, setMinutes] = useState(0)
  chrome.storage.sync.get(["minutes"], (result) => {
    setMinutes(result.minutes)
  }) 

  const [intention, setIntention] = useState('Write an intention :)')
  chrome.storage.sync.get(["intention"], (result) => {
      setIntention(result.intention)
  })

  return (
    <div className="App">
      <div className="amber-logo-container">
        <a href="https://chrome.google.com/webstore/detail/amber-mindfulness/hdfdgocligofefcgklikgpjadbphlipm?hl=es-419" target="_blank">
          <img src={Monke} alt="Amber Logo" className="amber-logo"></img>
        </a>
      </div>
      <div className="timer-count">{minutes} min</div>
      <hr />
      <div className='intention-banner'>
        <p className='intention-banner-content'>{intention}</p>
      </div>
      <div className='navbar-container'>
        <div className='login-btn'>
          <svg width="21" height="21" viewBox="0 0 21 21">
              <path
                d="M16.667 2H4.66699C3.56242 2 2.66699 2.89543 2.66699 4C2.66699 5.10457 3.56242 6 4.66699 6H16.667C17.7716 6 18.667 5.10457 18.667 4C18.667 2.89543 17.7716 2 16.667 2ZM4.66699 0C2.45785 0 0.666992 1.79086 0.666992 4C0.666992 6.20914 2.45785 8 4.66699 8H16.667C18.8761 8 20.667 6.20914 20.667 4C20.667 1.79086 18.8761 0 16.667 0H4.66699ZM8.66699 14H4.66699C3.56242 14 2.66699 14.8954 2.66699 16C2.66699 17.1046 3.56242 18 4.66699 18H8.66699C9.77156 18 10.667 17.1046 10.667 16C10.667 14.8954 9.77156 14 8.66699 14ZM8.66699 20H16.667C18.8761 20 20.667 18.2091 20.667 16C20.667 13.7909 18.8761 12 16.667 12H8.66699H4.66699C2.45785 12 0.666992 13.7909 0.666992 16C0.666992 18.2091 2.45785 20 4.66699 20H8.66699ZM12.1319 18C12.4722 17.4117 12.667 16.7286 12.667 16C12.667 15.2714 12.4722 14.5883 12.1319 14H16.667C17.7716 14 18.667 14.8954 18.667 16C18.667 17.1046 17.7716 18 16.667 18H12.1319Z"
                fill="#d78870"
              ></path>
            </svg>
            <h6 className="settings-login-btn-text">Login</h6>
        </div>
      </div>
    </div>
  )
}

export default App
