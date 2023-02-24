import React from 'react';

const NavbarDisplay: React.FC = () => {
  return (<nav className="navbar navbar-expand-md navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src="src\logo.PNG" alt="Logo" width="120" height="120" className="d-inline-block align-text-top me-2" />
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
    </div>
  </div>
</nav>
  );
};

export default NavbarDisplay;
