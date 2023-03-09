import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

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

const AboutmeContainer = styled.div<AboutmeContainerProps>`
  display: flex;
  height: 100%;
  width: 100%;
  background-color: ${({ isDarkMode }) => (isDarkMode ? 'dark' : 'white')};
  transition: background-color 0.5s ease;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: 50%;
`;

const Image = styled.img`
  width: 60%;
  border-radius: 40%;
`;

const DescriptionContainer = styled.div<AboutmeContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  width: 50%;
  padding-top: 5rem;
`;

const Title = styled.h1<AboutmeContainerProps>`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: ${({ isDarkMode }) => (isDarkMode ? 'white' : 'dark')};
  align-self: flex-start;
`;

const Description = styled.p<AboutmeContainerProps>`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: ${({ isDarkMode }) => (isDarkMode ? 'white' : 'dark')};
  white-space: pre-line; /* procesar saltos de línea */
`;

const AboutmeDisplay: React.FC<AboutmeProps> = ({ title, imageSrc, isDarkMode }) => {
  const [aboutmeData, setAboutmeData] = React.useState<AboutmeData>({
    title: '',
    description: '',
    imageSrc: '',
  });

  React.useEffect(() => {
    const fetchAboutmeData = async () => {
      try {
        const response = await axios.get('https://django-server-production-0db9.up.railway.app/api/me/10/?format=json');
        const response2 = await axios.get('https://django-server-production-0db9.up.railway.app/api/me/1/?format=json');
        const { description, title} = response.data;
        const { galery: galery2 } = response2.data;
        setAboutmeData({ title: title, description, imageSrc: galery2 });
      } catch (error) {
        console.error(error);
      }
    };

    fetchAboutmeData();
  }, []);

  return (
    <AboutmeContainer id="about" isDarkMode={isDarkMode}>
      <ImageContainer>
        <Image src={aboutmeData.imageSrc || imageSrc} alt="Profile" />
      </ImageContainer>
      <DescriptionContainer isDarkMode={isDarkMode}>
        <Title style={{ fontSize: '2.5rem', fontWeight: 700 }} isDarkMode={isDarkMode}>
          {aboutmeData.title || title}
        </Title>
        <Description isDarkMode={isDarkMode}>{aboutmeData.description || ''}</Description>
      </DescriptionContainer>
    </AboutmeContainer>
  );
};

export default AboutmeDisplay;
