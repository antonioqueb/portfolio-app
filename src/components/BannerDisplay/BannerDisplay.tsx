import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectIsDarkMode } from '../../reducers/darkmode/darkmodeSlices';
import styled from 'styled-components';
import axios from 'axios';

interface BannerProps {
  isDarkMode: boolean;
  title?: string;
  description?: string;
  galery?: string;
}

const BannerWrapper = styled.div<BannerProps>`
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

const LeftColumn = styled.div<BannerProps>`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2rem;

  align-items: center;
  background-color: ${({ isDarkMode }) => (isDarkMode ? 'rgb(30,30,30)' : 'white')};
  color: ${({ isDarkMode }) => (isDarkMode ? 'white' : 'black')};
  text-align: center;
`;

const BannerTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
`;

const BannerSubtitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 3rem;
`;

const Button = styled.a`
  display: space-between;
  padding: 1rem 1.2rem;
  border-radius: 5px;
  background-color: #468E99;
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  transition: background-color 0.5s ease, color 0.5s ease;
  margin: 0 0.5rem;

  &:hover {
    background-color: #ffff;
    color: black;
    border: 2px solid black;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightColumn = styled.div<BannerProps>`
  flex-basis: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ isDarkMode }) => (isDarkMode ? 'rgb(30,30,30)' : 'white')};
  color: ${({ isDarkMode }) => (isDarkMode ? 'white' : 'black')};
`;

const Image = styled.img`
  width: 100%;
`;

const BannerDisplay: React.FC = () => {
  const isDarkMode: boolean = useSelector(selectIsDarkMode);
  const [profile, setProfile] = useState<BannerProps>({ isDarkMode });
  const [galery, setGalery] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get<BannerProps>('https://django-server-production-0db9.up.railway.app/api/me/8/?format=json')
      .then(response => {
        setProfile(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    axios.get<{ galery: string }>('https://django-server-production-0db9.up.railway.app/api/me/7/?format=json')
      .then(response => {
        setGalery(response.data.galery);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <BannerWrapper isDarkMode={isDarkMode} title={profile?.title} description={profile?.description}>
      <LeftColumn isDarkMode={isDarkMode}>
        <BannerTitle style={{ fontSize: '2.5rem', fontWeight: 700 }}>{profile?.title}</BannerTitle>
        <BannerSubtitle>{profile?.description}</BannerSubtitle>
        <ButtonContainer>
          <Button href="#">Download CV</Button>
          <Button href="#">Contact me</Button>
        </ButtonContainer>
      </LeftColumn>
      <RightColumn isDarkMode={isDarkMode} galery={galery}>
        {galery && <Image src={galery} alt="galery"  />}
      </RightColumn>
    </BannerWrapper>
  );
};

export default BannerDisplay;
