import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg`} style={{ background: `linear-gradient(${props.mode === 'light' ? 'white' : 'black'},${props.primary})` }}>
      <div className="container-fluid">
        <span className="navbar-brand fw-bold text-center fs-2" style={{ color: props.secondary, width: "8%" }}>
          {props.titles[props.activePage]}
        </span>
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
              <Link className="nav-link" aria-current="page" to="/">
                <button disabled={props.activePage === ''} style={{ background: `linear-gradient(transparent, transparent)`, color: props.secondary, borderColor: props.secondary }} type="button" className="btn w-100 rounded-pill">Home</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/text-utils">
                <button disabled={props.activePage === 'text-utils'} style={{ background: `linear-gradient(transparent, transparent)`, color: props.secondary, borderColor: props.secondary }} type="button" className="btn w-100 rounded-pill">Text Utils</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-us">
                <button disabled={props.activePage === 'about-us'} style={{ background: `linear-gradient(transparent, transparent)`, color: props.secondary, borderColor: props.secondary }} type="button" className="btn w-100 rounded-pill">About Us</button>
              </Link>
            </li>
          </ul>
          {/* , borderTop: 0, borderTopLeftRadius: 0, borderTopRightRadius: 0 */}
          <div className="btn-group mx-2 my-2" role="group" aria-label="Button group with nested dropdown">
            <div className="btn-group" role="group">
              <button type="button" className={`btn btn-primary dropdown-toggle`} style={{ background: `linear-gradient(transparent, transparent)`, color: props.secondary, borderColor: props.secondary }} data-bs-toggle="dropdown" aria-expanded="false">
                Choose Colors
              </button>
              <ul className="dropdown-menu" id="color-palette" style={{ backgroundColor: props.primary, border: "1px solid", borderColor: props.secondary, boxShadow: `1px 1px 10px 0px ${props.secondary}` }} >
                {props.mode === 'dark' && props.themes.dark.primary.map((item, index) => (
                  <li className="mx-2 my-1" key={`color-button-${index}`}><button type="button" style={{ height: "25px", width: "100%", border: "2px solid", borderColor: props.themes.dark.secondary[index], background: `linear-gradient(90deg, ${item} 50%, ${props.themes.dark.secondary[index]} 50%)`, padding: "inherit" }} id={`dark-color-button-${index}`} className="btn" onClick={props.handleSwitchColor} value={index}><span id={`currentDarkTheme-${index}`} style={{ textShadow: "1px 1px 2px black, 0 0 1em black, 0 0 0.2em black", color: "white" }}>Current</span></button></li>
                ))}
                {props.mode === 'light' && props.themes.light.primary.map((item, index) => (
                  <li className="mx-2 my-1" key={`color-button-${index}`}><button type="button" style={{ height: "25px", width: "100%", border: "2px solid", borderColor: props.themes.light.secondary[index], background: `linear-gradient(90deg, ${item} 50%, ${props.themes.light.secondary[index]} 50%)`, padding: "inherit" }} id={`light-color-button-${index}`} className="btn" onClick={props.handleSwitchColor} value={index}><span id={`currentLightTheme-${index}`} style={{ textShadow: "1px 1px 2px white, 0 0 1em white, 0 0 0.2em white", color: "black" }}>Current</span></button></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="form-check form-switch my-1" style={{ background: `linear-gradient(transparent, transparent)`, color: props.secondary }}>
            <input className="form-check-input" type="checkbox" role="switch" id="modeSwitch" onChange={props.switchMode} style={{}} />
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