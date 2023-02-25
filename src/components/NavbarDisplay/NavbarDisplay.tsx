import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Switch from 'react-switch';
import { toggleDarkMode } from '../../reducers/darkmode/darkmodeSlices';

const NavbarDisplay: React.FC = () => {
  const dispatch = useDispatch();
  const [darkMode, setDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
    setDarkMode(!darkMode);
  };

  return (
    <nav className={`navbar navbar-expand-md navbar-${darkMode ? 'dark' : 'light'} bg-${darkMode ? 'dark' : 'light'}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          { darkMode ? <img src="src\logo.svg" alt="Logo" width="80" height="80" className="d-inline-block align-text-top me-2" /> : <img src="src\logo-black.svg" alt="Logo" width="80" height="80" className="d-inline-block align-text-top me-2" /> }
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact Me</a>
            </li>
          </ul>
        </div>
        <div className="d-flex">
          <a className="nav-link" href="#">
            <i className="bi bi-linkedin me-3"></i>
          </a>
          <a className="nav-link" href="#">
            <i className="bi bi-github"></i>
          </a>
          <Switch onChange={handleToggleDarkMode} checked={darkMode} handleDiameter={15} height={20} onColor="#343a40" offColor="#ced4da"  />
        </div>
      </div>
    </nav>
  );
};

export default NavbarDisplay;
