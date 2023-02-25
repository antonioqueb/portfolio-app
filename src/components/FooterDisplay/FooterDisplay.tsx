import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsDarkMode } from '../../reducers/darkmode/darkmodeSlices';


const FooterDisplay: React.FC = () => {
  const isDarkMode = useSelector(selectIsDarkMode);
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <footer className="text-center py-3 mt-auto">
        <p className={isDarkMode ? "text-light" : "text-dark"} >
          Creado por <a href="https://github.com/antonioqueb">Antonio Queb</a>
        </p>
      </footer>
    </div>
  );
};

export default FooterDisplay;
