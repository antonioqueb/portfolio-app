import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ffffff;
`;

const CircleWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
`;

const Circle = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #F2CB05;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const Circle1 = styled(Circle)`
  top: 0;
  left: 50%;
  transform: translateY(-100%);
  animation: ${keyframes`
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(-100%) rotate(360deg);
    }
  `} 2s linear infinite;
`;

const Circle2 = styled(Circle)`
  top: 50%;
  right: 0;
  transform: translateX(100%);
  animation: ${keyframes`
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(100%) rotate(360deg);
    }
  `} 2s linear infinite;
`;

const Circle3 = styled(Circle)`
  bottom: 0;
  left: 50%;
  transform: translateY(100%);
  animation: ${keyframes`
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(100%) rotate(360deg);
    }
  `} 2s linear infinite;
`;

const Circle4 = styled(Circle)`
  top: 50%;
  left: 0;
  transform: translateX(-100%);
  animation: ${keyframes`
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(-100%) rotate(360deg);
    }
  `} 2s linear infinite;
`;

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCSS = async () => {
      // Reemplace 'your-css-file.css' con la ruta de su archivo CSS
      const cssFile = 'your-css-file.css';
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = cssFile;
      document.head.appendChild(link);

      link.onload = () => {
        setLoading(false);
      };
    };
    
    loadCSS();
  }, []);

  return (
    <Container>
      {loading && (
        <CircleWrapper>
          <Circle1 />
          <Circle2 />
          <Circle3 />
          <Circle4 />
        </CircleWrapper>
      )}
    </Container>
  );
};

export default Preloader;
