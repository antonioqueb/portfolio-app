import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Circle = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.2);
  transform-style: preserve-3d;
  animation: ${keyframes`
    from {
      transform: translateZ(-25px);
    }
    to {
      transform: rotateX(360deg) translateZ(-25px);
    }
  `} 1s linear infinite;
`;

const CircleWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  transform-style: preserve-3d;
`;

const Circle1 = styled(Circle)`
  position: absolute;
  top: 0;
  left: 0;
`;

const Circle2 = styled(Circle)`
  position: absolute;
  top: 0;
  right: 0;
  animation-delay: 0.5s;
`;

const Circle3 = styled(Circle)`
  position: absolute;
  bottom: 0;
  left: 0;
  animation-delay: 1s;
`;

const Circle4 = styled(Circle)`
  position: absolute;
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
