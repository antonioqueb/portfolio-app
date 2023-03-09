import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectIsDarkMode } from '../../reducers/darkmode/darkmodeSlices';
import { SkillStyled } from './SkillStyled';
import { getSkills } from './SkillApi';

interface Skill {
  id: number;
  name: string;
  logo_url: string;
  experience: string;
}

interface CarouselState {
  skills?: Skill[];
  currentIndex: number;
}

// Componente del carrusel
const Carousel: React.FC = () => {
  const isDarkMode = useSelector(selectIsDarkMode);
  const [state, setState] = useState<CarouselState>({
    skills: undefined,
    currentIndex: 0,
  });

  useEffect(() => {
    // Obtiene las imágenes con Axios
    getSkills().then((skills) => {
      setState({
        ...state,
        skills: [...skills, ...skills, ...skills],
      });
    });
  }, []);

  // Maneja el evento del botón derecho
  const handleNext = () => {
    const newIndex = state.currentIndex + 4;
    setState({
      ...state,
      currentIndex: newIndex < (state.skills?.length ?? 0) ? newIndex : state.currentIndex,
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
    <SkillStyled.Background isDarkMode={isDarkMode}>
      <SkillStyled.Title style={{ fontSize: '2.5rem', fontWeight: 700 }} isDarkMode={isDarkMode}>
        {/* Agrega el título aquí */}
      </SkillStyled.Title>
      <>
        <SkillStyled.ButtonContainer>
          <SkillStyled.Button onClick={handlePrev}>&lt;</SkillStyled.Button>
          <SkillStyled.Button onClick={handleNext}>&gt;</SkillStyled.Button>
        </SkillStyled.ButtonContainer>
        <SkillStyled.Container isDarkMode={isDarkMode}>
          {state.skills?.slice(state.currentIndex, state.currentIndex + 4).map((skill) => (
            <SkillStyled.LogoContainer key={skill.id} isDarkMode={isDarkMode}>
              <SkillStyled.Logo src={skill.logo_url} alt={skill.name} isDarkMode={isDarkMode} />
            </SkillStyled.LogoContainer>
          ))}
        </SkillStyled.Container>
      </>
    </SkillStyled.Background>
  );
};

export default Carousel;
