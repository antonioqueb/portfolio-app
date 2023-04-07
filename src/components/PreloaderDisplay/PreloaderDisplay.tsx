import React from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Ellipsis = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
`;

const EllipsisDot = styled.div`
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: #F2CB05;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
`;

const EllipsisDot1 = styled(EllipsisDot)`
  left: 8px;
  animation: ${keyframes`
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  `} 0.6s infinite;
`;

const EllipsisDot2 = styled(EllipsisDot)`
  left: 8px;
  animation: ${keyframes`
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  `} 0.6s infinite;
`;

const EllipsisDot3 = styled(EllipsisDot)`
  left: 32px;
  animation: ${keyframes`
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  `} 0.6s infinite;
`;

const EllipsisDot4 = styled(EllipsisDot)`
  left: 56px;
  animation: ${keyframes`
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  `} 0.6s infinite;
`;

const Preloader = () => {
  return (
    <Container>
      <Ellipsis>
        <EllipsisDot1 />
        <EllipsisDot2 />
        <EllipsisDot3 />
        <EllipsisDot4 />
      </Ellipsis>
    </Container>
  );
};

export default Preloader;
