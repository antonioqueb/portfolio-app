import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Circle = styled(animated.div)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 10px;
`;

const Preloader = () => {
  const [props1, set1] = useSpring(() => ({ transform: 'scale(1)', config: { duration: 500 } }));
  const [props2, set2] = useSpring(() => ({ transform: 'scale(1)', config: { duration: 500 } }));
  const [props3, set3] = useSpring(() => ({ transform: 'scale(1)', config: { duration: 500 } }));

  const animate = () => {
    set1({ transform: 'scale(2)', config: { duration: 500 } });
    set2({ transform: 'scale(2)', config: { duration: 500 }, delay: 100 });
    set3({ transform: 'scale(2)', config: { duration: 500 }, delay: 200 });

    setTimeout(() => {
      set1({ transform: 'scale(1)', config: { duration: 500 } });
      set2({ transform: 'scale(1)', config: { duration: 500 }, delay: 100 });
      set3({ transform: 'scale(1)', config: { duration: 500 }, delay: 200 });

      setTimeout(() => {
        animate();
      }, 500);
    }, 800);
  };

  React.useEffect(() => {
    animate();
  }, []);

  return (
    <Container>
      <Circle style={props1} />
      <Circle style={props2} />
      <Circle style={props3} />
    </Container>
  );
};

export default Preloader;
