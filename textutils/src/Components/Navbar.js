import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg rounded-bottom`} style={{ background: `linear-gradient(${props.mode==='light'? 'white': 'black'},${props.primary})`, borderBottom: "0.2px inset", borderBottomColor: props.secondary}}>
      <div className="container-fluid">
        <a className="navbar-brand" style={{color: props.secondary}} href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" style={{color: props.secondary}} aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{color: props.secondary}} href="/">
                About Us
              </a>
            </li>
          </ul>
          <div className="btn-group mx-2 my-2" role="group" aria-label="Button group with nested dropdown">
            <div className="btn-group" role="group">
              <button type="button" className={`btn btn-primary dropdown-toggle`} style={{background: `linear-gradient(transparent, transparent)`, color: props.secondary, borderColor: props.secondary}} data-bs-toggle="dropdown" aria-expanded="false">
                Choose Colors
              </button>
              <ul className="dropdown-menu" id="color-palette" style={{backgroundColor: props.primary, border: "1px solid", borderColor: props.secondary, boxShadow: `1px 1px 10px 0px ${props.secondary}`}} >
                {props.mode==='dark' && props.themes.dark.primary.map((item, index) => (
                  <li className="mx-2 my-1" key={`color-button-${index}`}><button type="button" style={{width: "100%", background: `linear-gradient(transparent, black)`, color: props.secondary, border: "0.5px solid", borderColor: props.secondary}} id={`dark-color-button-${index}`} className="btn btn-primary" onClick={props.handleSwitchColor} value={index}> {item}/{props.themes.dark.secondary[index]}</button></li>
                ))}
                {props.mode==='light' && props.themes.light.primary.map((item, index) => (
                  <li className="mx-2 my-1" key={`color-button-${index}`}><button type="button" style={{width: "100%", background: `linear-gradient(transparent, white)`, color: props.secondary, border: "0.5px solid", borderColor: props.secondary}} id={`light-color-button-${index}`} className="btn btn-primary" onClick={props.handleSwitchColor} value={index}> {item}/{props.themes.light.secondary[index]}</button></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="form-check form-switch my-1" style={{background: `linear-gradient(transparent, transparent)`, color: props.secondary}}>
            <input className="form-check-input" type="checkbox" role="switch" id="modeSwitch" onChange={props.switchMode} style={{}}/>
            <label className="form-check-label" htmlFor="modeSwitch">{props.mode === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}</label>
          </div>
        </div>
      </div>
    </nav>
  )
}


Navbar.propTypes = {
  title: PropTypes.string
}

Navbar.defaultProps = {
  title: 'Set Title Here'
}