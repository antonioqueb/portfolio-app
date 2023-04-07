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
  transform-style: preserve-3d;
  animation: ${keyframes`
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(360deg);
    }
  `} 4s linear infinite;
`;

const Circle = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #F2CB05;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
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

const GrowCircle = styled.div`
  position: absolute;
  width: 0px;
  height: 0px;
  border-radius: 50%;
  background-color: #F2CB05;
  transform: translate(-50%, -50%);
  animation: ${keyframes`
    from {
      width: 0px;
      height: 0px;
      opacity: 1;
    }
    to {
      width: 100vw;
      height: 100vh;
      opacity: 0;
    }
  `} 1.5s ease-out forwards;
`;

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container>
      {loading && (
        <>
          <CircleWrapper>
            <Circle1 />
            <Circle2 />
            <Circle3 />
            <Circle4 />
          </CircleWrapper>
          <GrowCircle />
        </>
      )}
    </Container>
  );
};

export default Preloader;
