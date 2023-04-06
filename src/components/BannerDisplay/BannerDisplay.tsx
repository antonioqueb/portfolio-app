import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectIsDarkMode } from '../../reducers/darkmode/darkmodeSlices';
import {Styled} from './BannerStyled';
import { BannerProps, fetchBanner, fetchGalery } from './BannerApi';

interface ButtonProps {
  isDarkMode: boolean;
}

const BannerDisplay: React.FC = () => {
  const isDarkMode: boolean = useSelector(selectIsDarkMode);
  const [profile, setProfile] = useState<BannerProps>({ isDarkMode });
  const [galery, setGalery] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await fetchBanner();
        setProfile(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, []);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const data = await fetchGalery();
        setGalery(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGallery();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Styled.BannerWrapper isDarkMode={isDarkMode} title={profile?.title} description={profile?.description}>
      <Styled.LeftColumn isDarkMode={isDarkMode}>
        <Styled.BannerTitle style={{ fontSize: '2.5rem', fontWeight: 700 }}>{profile?.title}</Styled.BannerTitle>
        <Styled.BannerSubtitle>{profile?.description}</Styled.BannerSubtitle>
        <Styled.ButtonContainer>
          <Styled.Button 
            href="https://www.queb.online/" target="_blank" rel="noopener noreferrer"
            style={{ fontSize: '1.5rem', fontWeight: 600 }}
            isDarkMode={isDarkMode}
          >Download CV</Styled.Button>
          <Styled.Button 
            style={{ fontSize: '1.5rem', fontWeight: 600 }}
            isDarkMode={isDarkMode}
            href='#contact'
          >Contact me</Styled.Button>
        </Styled.ButtonContainer>
      </Styled.LeftColumn>
      <Styled.RightColumn isDarkMode={isDarkMode} galery={galery}>
        {galery && <Styled.Image src={galery} alt="galery"  />}
      </Styled.RightColumn>
    </Styled.BannerWrapper>
  );
  
};

export default BannerDisplay;
