import React from 'react';
import { Styled } from './AboutmeStyled';
import fetchAboutmeData from './AboutmeApi';

interface AboutmeProps {
  title?: string;
  imageSrc?: string;
  isDarkMode?: boolean;
}

interface AboutmeData {
  title: string;
  description: string;
  imageSrc: string;
}

interface AboutmeContainerProps {
  isDarkMode?: boolean;
}

const AboutmeDisplay: React.FC<AboutmeProps> = ({ title, imageSrc, isDarkMode }) => {
  const [aboutmeData, setAboutmeData] = React.useState<AboutmeData>({
    title: '',
    description: '',
    imageSrc: '',
  });

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAboutmeData();
        setAboutmeData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Styled.AboutmeContainer id="about" isDarkMode={isDarkMode}>
      <Styled.ImageContainer>
        <Styled.Image src={aboutmeData.imageSrc || imageSrc} alt="Profile" />
      </Styled.ImageContainer>
      <Styled.DescriptionContainer isDarkMode={isDarkMode}>
        <Styled.Title style={{ fontWeight: 700 }} isDarkMode={isDarkMode}>
          {aboutmeData.title || title}
        </Styled.Title>
        <Styled.Description isDarkMode={isDarkMode}>{aboutmeData.description || ''}</Styled.Description>
      </Styled.DescriptionContainer>
    </Styled.AboutmeContainer>
  );
};

export default AboutmeDisplay;
