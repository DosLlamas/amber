import { useState } from 'react'
import Monke from './assets/popupLogo.png'
import './App.css'
import { chromeExtension } from '@crxjs/vite-plugin'
// import { chromeExtension } from '@crxjs/vite-plugin'

function App() {

  // get the time and intention as the user submits the forms to chrome.storage
  const [minutes, setMinutes] = useState(0)
  chromeExtension.storage.sync.get(["minutes"], (result) => {
    setMinutes(result.minutes)
  }) 

  const [intention, setIntention] = useState('Write an intention :)')
  chromeExtension.storage.sync.get(["intention"], (result) => {
    setIntention(result.intention)
  })

  return (
    <div className="App">
     <div className="amber-logo-container">
      <a href="https://chrome.google.com/webstore/detail/amber-mindfulness/hdfdgocligofefcgklikgpjadbphlipm?hl=es-419" target="_blank">
        <img src={Monke} alt="Amber Logo" className="amber-logo"></img>
      </a>
     </div>
    </div>
  )
}

export default App
