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
    <nav className={`navbar navbar-expand-md navbar-${darkMode ? 'dark' : 'light'} bg-${darkMode ? 'dark' : 'light'}`} style={{padding: '2vh 2vw'}}>
      <div className="container-fluid" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <a className="navbar-brand me-auto" href="#">
          { darkMode ? <img src="src\logo.svg" alt="Logo" width="80" height="80" className="d-inline-block align-text-top me-2" /> : <img src="src\logo-black.svg" alt="Logo" width="80" height="80" className="d-inline-block align-text-top me-2" /> }
        </a>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav d-flex" style={{justifyContent: 'space-between', alignItems: 'center', width: '30vw'}}>
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
        <div className="d-flex align-items-center">
          <Switch onChange={handleToggleDarkMode} checked={darkMode} handleDiameter={15} height={20} onColor="#387373" offColor="#97A6A0" />
        </div>
      </div>
    </nav>
  );
};

export default NavbarDisplay;
