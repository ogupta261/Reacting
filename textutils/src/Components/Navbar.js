import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {

  const handleSwitchColor = (index) => {
    switch (props.mode) {
      case 'dark':
        props.setPrimary(props.themes.dark.primary[index])
        props.setSecondary(props.themes.dark.secondary[index])
        break;
    
      case 'light':
        props.setPrimary(props.themes.light.primary[index])
        props.setSecondary(props.themes.light.secondary[index])
        break;
      default:
        break;
    }
    
  }

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
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
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                About Us
              </a>
            </li>
          </ul>
          <div className="btn-group mx-2" data-bs-theme={props.mode} role="group" aria-label="Button group with nested dropdown">
            <div className="btn-group" role="group">
              <button type="button" className={`btn btn-${props.mode} dropdown-toggle`} data-bs-toggle="dropdown" aria-expanded="false">
                Choose Colors
              </button>
              <ul className="dropdown-menu">
                {props.mode==='dark' && props.themes.dark.primary.map((item, index) => (
                  <li><a className="dropdown-item" key={index} onClick={handleSwitchColor(index)} href="/">{item}</a></li>
                ))}
                {props.mode==='light' && props.themes.light.primary.map((item, index) => (
                  <li><a className="dropdown-item" key={index} onClick={handleSwitchColor(index)} href="/">{item}</a></li>
                ))}
                {/* <li>
                  <button type="button" className={`btn btn-${props.mode}`}>
                    Color 1
                  </button>
                </li>
                <li>
                  <button type="button" className={`btn btn-${props.mode}`}>
                    Color 2
                  </button>
                </li> */}
              </ul>
            </div>
          </div>
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" type="checkbox" role="switch" id="modeSwitch" onChange={props.switchMode} />
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