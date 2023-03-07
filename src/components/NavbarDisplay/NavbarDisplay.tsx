import { useDispatch, useSelector } from 'react-redux';
import Switch from 'react-switch';
import { toggleDarkMode, selectIsDarkMode } from '../../reducers/darkmode/darkmodeSlices';
import styled from 'styled-components';
import axios from 'axios';
import { useState, useEffect } from 'react';

interface HeaderProps {
  bgColor: string;
  isDarkMode: boolean;
}

const Header = styled.header<HeaderProps>`
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700&display=swap');
  box-sizing: border-box;
  margin: 0.5rem;
  padding: 0.3rem;
  font-family: 'Nunito Sans', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ bgColor, isDarkMode }) => isDarkMode ? '#1C1C1C' : bgColor};
  padding: 1rem;
  font-size: 1.28rem;

  a {
    color: ${({ isDarkMode }) => isDarkMode ? '#FFFFFF' : '#333'};
  }

  label {
    color: ${({ isDarkMode }) => isDarkMode ? '#FFFFFF' : '#333'};
  }
`;

const Nav = styled.nav`
  ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    font-family: 'Nunito Sans', sans-serif;
    margin-right: 1.5rem;
  }

  a {
    font-family: 'Nunito Sans', sans-serif;
    text-decoration: none;
    transition: font-size 0.19s ease-out;
  }

  a:hover {
    font-size: 1.08em;
  }
`;

const Logo = styled.img`
  width: 100px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.2s ease-in-out;
  }
`;

const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SwitchLabel = styled.label`
  font-family: 'Nunito Sans', sans-serif;
  margin-right: 0.5rem;
`;

const NavbarDisplay: React.FC = () => {
  const [darkLogoUrl, setDarkLogoUrl] = useState<string>('');
  const [lightLogoUrl, setLightLogoUrl] = useState<string>('');
  const isDarkMode = useSelector(selectIsDarkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const darkLogoResponse = await axios.get('https://django-server-production-0db9.up.railway.app/api/me/3/?format=json');
        const lightLogoResponse = await axios.get('https://django-server-production-0db9.up.railway.app/api/me/2/?format=json');
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
    <Header
      bgColor={isDarkMode ? '#1C1C1C' : '#FFFFFF'}
      isDarkMode={isDarkMode}
    >
      <Logo
        src={isDarkMode ? darkLogoUrl : lightLogoUrl}
        alt="Logo de la marca personal"
      />
      <Nav>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </Nav>
      <SwitchWrapper>
        <SwitchLabel htmlFor="dark-mode-switch"></SwitchLabel>
        <Switch
          id="dark-mode-switch"
          onChange={handleThemeChange}
          checked={isDarkMode}
          uncheckedIcon={false}
          checkedIcon={false}
          onColor="#b3b3b3"
          offColor="#b3b3b3"
        />
      </SwitchWrapper>
    </Header>
  );
};

export default NavbarDisplay;
