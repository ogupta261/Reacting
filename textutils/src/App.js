import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);
  const [primary, setPrimary] = useState('white');
  const [secondary, setSecondary] = useState('black');
  
  const themes = {
    light: {
      primary: ['white','lightgreen','lightblue','lightgrey'],
      secondary: ['black','darkblue','black','darkgreen']
    },
    dark: {
      primary: ['black','darkblue','black','darkgreen'],
      secondary: ['white','lightgreen','lightblue','lightgrey']
    }
  }

  const setPrimaryColor = (color) => {
    setPrimary(color)
  }

  const setSecondaryColor = (color) => {
    setSecondary(color)
  }
  
  const showAlert = (message, type, time) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, time);
  }

  let switchMode = () => {
    document.body.style.backgroundColor = mode==='light' ? 'black' : 'white'
    setPrimary(document.body.style.backgroundColor)
    setSecondary(mode==='light' ? 'white' : 'black')
    // showAlert((mode==='light' ? 'Dark' : 'Light') + ' mode has been set!', 'success', 1500)
    setMode(mode==='light' ? 'dark' : 'light')
  }
  return (
    <div style={{backgroundColor: primary}}>
      <Navbar title='Text Utils' themes={themes} setPrimary={setPrimaryColor} setSecondary={setSecondaryColor} mode={mode} switchMode={switchMode}/>
      <Alert alert={alert} setAlert={setAlert}/>
      <TextForm heading='Enter Text Below' showAlert={showAlert} primary={primary} secondary={secondary} mode={mode}/>
    </div>
  );
}

export default App;
