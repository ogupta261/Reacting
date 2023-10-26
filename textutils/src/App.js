import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);
  const [primary, setPrimary] = useState('white');
  const [secondary, setSecondary] = useState('black');
  const [darkTheme, setDarkTheme] = useState(0);
  const [lightTheme, setLightTheme] = useState(0);

  const themes = {
    light: {
      primary: ['white', 'lightcyan', 'lightblue', 'lightgrey'],
      secondary: ['black', 'darkblue', 'black', 'darkgreen']
    },
    dark: {
      primary: ['black', 'darkslateblue', 'black', 'darkslategrey'],
      secondary: ['white', 'lightcyan', 'lightblue', 'lightgrey']
    }
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
    setMode(mode === 'light' ? 'dark' : 'light')
    switch (mode) {
      case 'dark':
        document.body.style.backgroundColor = themes.light.primary[lightTheme]
        setPrimary(themes.light.primary[lightTheme])
        setSecondary(themes.light.secondary[lightTheme])
        showAlert('Light mode has been set!', 'success', 500)
        break;
      case 'light':
        document.body.style.backgroundColor = themes.dark.primary[darkTheme]
        setPrimary(themes.dark.primary[darkTheme])
        setSecondary(themes.dark.secondary[darkTheme])
        showAlert('Dark mode has been set!', 'success', 500)
        break;
      default:
        break;
    }
  }
  useEffect(() => {
    switch (mode) {
      case 'light':
        for (let i = 0; i < themes.light.primary.length; i++) {
          if ((lightTheme - i) === 0) {
            document.getElementById("light-color-button-" + i).disabled = true
            document.getElementById("currentLightTheme-"+i).hidden = false
          } else {
            document.getElementById("light-color-button-" + i).disabled = false
            document.getElementById("currentLightTheme-"+i).hidden = true
          }
        }
        break;
      case 'dark':
        for (let i = 0; i < themes.dark.primary.length; i++) {
          if ((darkTheme - i) === 0) {
            document.getElementById("dark-color-button-" + i).disabled = true
            document.getElementById("currentDarkTheme-"+i).hidden = false
          } else {
            document.getElementById("dark-color-button-" + i).disabled = false
            document.getElementById("currentDarkTheme-"+i).hidden = true
          }
        }
        break;
      default:
        break;
    }
  });

  const handleSwitchColor = (event) => {
    let index = event.target.value
    switch (mode) {
      case 'dark':
        document.body.style.backgroundColor = themes.dark.primary[index]
        setPrimary(themes.dark.primary[index])
        setSecondary(themes.dark.secondary[index])
        setDarkTheme(index)
        break;

      case 'light':
        document.body.style.backgroundColor = themes.light.primary[index]
        setPrimary(themes.light.primary[index])
        setSecondary(themes.light.secondary[index])
        setLightTheme(index)
        break;
      default:
        break;
    }
  }
  return (
    <>
      <Navbar title='Text Utils' themes={themes} handleSwitchColor={handleSwitchColor} darkTheme={darkTheme} lightTheme={lightTheme} primary={primary} secondary={secondary} mode={mode} switchMode={switchMode} />
      <Alert alert={alert} />
      <TextForm heading='Enter Text Below' showAlert={showAlert} primary={primary} secondary={secondary} mode={mode} />
    </>
  );
}

export default App;
