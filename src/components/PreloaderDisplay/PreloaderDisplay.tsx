import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #2C2D35;
`;

const CircleWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  transform-style: preserve-3d;
`;

const Circle = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #44E3D3;
  transform-style: preserve-3d;
  animation: ${keyframes`
    from {
      transform: rotateY(0deg) translateZ(0);
    }
    to {
      transform: rotateY(360deg) translateZ(-150px);
    }
  `} 2s linear infinite;
`;

const Circle1 = styled(Circle)`
  top: 0;
  left: 0;
  animation-delay: 0s;
`;

const Circle2 = styled(Circle)`
  top: 0;
  right: 0;
  animation-delay: 0.5s;
`;

const Circle3 = styled(Circle)`
  bottom: 0;
  left: 0;
  animation-delay: 1s;
`;

const Circle4 = styled(Circle)`
  bottom: 0;
  right: 0;
  animation-delay: 1.5s;
`;

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
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
