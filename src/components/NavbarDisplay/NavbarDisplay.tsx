import { useDispatch, useSelector } from 'react-redux';
import Switch from 'react-switch';
import { toggleDarkMode, selectIsDarkMode } from '../../reducers/darkmode/darkmodeSlices';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {Styled } from './NavbarStyled';

interface HeaderProps {
  bgColor: string;
  isDarkMode: boolean;
}

const NavbarDisplay: React.FC = () => {
  const [darkLogoUrl, setDarkLogoUrl] = useState<string>('');
  const [lightLogoUrl, setLightLogoUrl] = useState<string>('');
  const isDarkMode = useSelector(selectIsDarkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const darkLogoResponse = await axios.get('https://queb.online:8088/api/me/2/?format=json');
        const lightLogoResponse = await axios.get('https://queb.online:8088/api/me/1/?format=json');
        setDarkLogoUrl(darkLogoResponse.data.galery);
        setLightLogoUrl(lightLogoResponse.data.galery);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLogos();
  }, []);

  const handleThemeChange = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <Styled.Header
      bgColor={isDarkMode ? '#1C1C1C' : '#FFFFFF'}
      isDarkMode={isDarkMode}
    >
      <Styled.Logo
        src={isDarkMode ? darkLogoUrl : lightLogoUrl}
        alt="Logo de la marca personal"
      />
      <Styled.Nav>
        <ul>
          <li>
            <a style={{ fontSize: '1.3rem', fontWeight: 700 }} href="#about">About</a>
          </li>
          <li>
            <a style={{ fontSize: '1.3rem', fontWeight: 700 }} href="#projects">Projects</a>
          </li>
      
          <li>
            <a style={{ fontSize: '1.3rem', fontWeight: 700 }} href="#blog">Blog</a>
          </li>
          <li>
            <a style={{ fontSize: '1.3rem', fontWeight: 700 }} href="#contact">Contact</a>
          </li>
        </ul>
      </Styled.Nav>
      <Styled.SwitchWrapper>
        <Styled.SwitchLabel htmlFor="dark-mode-switch"></Styled.SwitchLabel>
        <Switch
          id="dark-mode-switch"
          onChange={handleThemeChange}
          checked={isDarkMode}
          uncheckedIcon={false}
          checkedIcon={false}
          onColor="#b3b3b3"
          offColor="#b3b3b3"
          onHandleColor="#333"
          offHandleColor="#FFFFFF"
          handleDiameter={20}
          height={20}
          width={40}

        />
      </Styled.SwitchWrapper>
    </Styled.Header>
  );
};

export default NavbarDisplay;
