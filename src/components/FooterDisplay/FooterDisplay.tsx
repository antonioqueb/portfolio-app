import React from 'react';

const FooterDisplay: React.FC = () => {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <footer className="text-center py-3 mt-auto">
        <p>
          Creado por <a href="https://github.com/antonioqueb">Antonio Queb</a>
        </p>
      </footer>
    </div>
  );
};

export default FooterDisplay;
