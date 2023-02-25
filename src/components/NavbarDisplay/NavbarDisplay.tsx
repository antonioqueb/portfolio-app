import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleDarkMode } from '../../reducers/darkmode/darkmodeSlices';

const NavbarDisplay: React.FC = () => {
  const dispatch = useDispatch();

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="src\logo.svg" alt="Logo" width="80" height="80" className="d-inline-block align-text-top me-2" />
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
          <button className="btn btn-primary ms-3" onClick={handleToggleDarkMode}>Dark Mode</button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarDisplay;
