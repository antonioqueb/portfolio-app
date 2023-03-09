import { selectIsDarkMode } from '../../reducers/darkmode/darkmodeSlices';
import React, { useState, useEffect  } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useSelector } from 'react-redux';


// Define la interfaz de las imágenes
interface Skill {
  id: number;
  name: string;
  logo_url: string;
  experience: string;
}
interface TitleProps {
  isDarkMode: boolean;
}
// Define la interfaz del estado del carrusel
interface CarouselState {
  skills: Skill[];
  currentIndex: number;
}

// Estilos del carrusel

const Title = styled.h1<TitleProps>`
  text-align: center;
  font-size: 2rem;
  color: ${({ isDarkMode }) => (isDarkMode ? 'white' : 'dark')};
  background-color: ${({ isDarkMode }) => (isDarkMode ? 'dark' : 'white')};
  margin: 2rem 0;
  padding: 0 2rem;
  align-items: center;
  justify-content: center;
  display: flex;

`;



const Container = styled.div<{ isDarkMode: boolean }>`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  width: 80%;
  margin: 0 auto;
  justify-content: center;
  background-color: ${({ isDarkMode }) => (isDarkMode ? 'dark' : 'white')};

`;

const LogoContainer = styled.div<{ isDarkMode: boolean }>`
  width: 100px;
  height: 100px;
  margin-right: 20px;
  margin: auto;
  background-color: ${({ isDarkMode }) => (isDarkMode ? 'dark' : 'white')};

`;

const Logo = styled.img<{ isDarkMode: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: contain;
  background-color: ${({ isDarkMode }) => (isDarkMode ? 'dark' : 'white')};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  color: #ccc;
  font-size: 2rem;
  cursor: pointer;
  margin: 0 10px;
`;

const Background = styled.div<{ isDarkMode: boolean }>`
  background-color: ${({ isDarkMode }) => (isDarkMode ? 'dark' : 'white')};
  width: 100%;
  height: 100%;


`;


// Componente del carrusel
const Carousel: React.FC = () => {
  const isDarkMode = useSelector(selectIsDarkMode);
  const [state, setState] = useState<CarouselState>({
    skills: [],
    currentIndex: 0,
  });

  useEffect(() => {
    // Obtiene las imágenes con Axios
    axios.get<Skill[]>('https://django-server-production-0db9.up.railway.app/api/skill/')
      .then((response) => {
        setState({
          ...state,
          skills:[...response.data, ...response.data, ...response.data]
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Maneja el evento del botón derecho
  const handleNext = () => {
    const newIndex = state.currentIndex + 4;
    setState({
      ...state,
      currentIndex: newIndex < state.skills.length ? newIndex : state.currentIndex,
    });
  };

  // Maneja el evento del botón izquierdo
  const handlePrev = () => {
    const newIndex = state.currentIndex - 4;
    setState({
      ...state,
      currentIndex: newIndex >= 0 ? newIndex : state.currentIndex,
    });
  };

  return (
    <Background isDarkMode={isDarkMode}>
      <Title style={{ fontSize: '2.5rem', fontWeight: 700 }} isDarkMode={isDarkMode}
      
      >
        
        </Title>
        <>
          <ButtonContainer>
            <Button onClick={handlePrev}>&lt;</Button>
            <Button onClick={handleNext}>&gt;</Button>
          </ButtonContainer>
          <Container
            isDarkMode={isDarkMode}
          >
            {state.skills.slice(state.currentIndex, state.currentIndex + 4).map((skill) => (
              <LogoContainer key={skill.id} isDarkMode={isDarkMode} >
                <Logo src={skill.logo_url} alt={skill.name} isDarkMode={isDarkMode}/>
              </LogoContainer>
            ))}
          </Container>

        </> 
    </Background>
    
  );
};

export default Carousel;