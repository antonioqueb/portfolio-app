import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsDarkMode } from '../../reducers/darkmode/darkmodeSlices';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { Styled } from './FooterStyled';

const FooterDisplay: React.FC = () => {
  const isDarkMode = useSelector(selectIsDarkMode);

  const handleLinkedinClick = () => {
    window.open('https://www.linkedin.com/in/antonio-queb-aab85324b/', '_blank');
  };

  const handleGithubClick = () => {
    window.open('https://github.com/antonioqueb', '_blank');
  };

  const handleTwitterClick = () => {
    window.open('https://twitter.com/antonioqueb_', '_blank');
  };

  return (
    <Styled.Footer bgColor={isDarkMode ? '#1C1C1C' : '#FFFFFF'}>
      <Styled.Section>
        <Styled.List>
          <Styled.ListItem>
            <Styled.Link href="https://www.linkedin.com/in/antonio-queb-aab85324b/" target="_blank" rel="noopener noreferrer" isDarkMode={isDarkMode}>
              <Styled.Icon isDarkMode={isDarkMode} onClick={handleLinkedinClick}>
                <FaLinkedin />
              </Styled.Icon>
            </Styled.Link>
          </Styled.ListItem>
          <Styled.ListItem>
            <Styled.Link href="https://github.com/antonioqueb" target="_blank" rel="noopener noreferrer" isDarkMode={isDarkMode}>
              <Styled.Icon isDarkMode={isDarkMode} onClick={handleGithubClick}>
                <FaGithub />
              </Styled.Icon>
            </Styled.Link>
          </Styled.ListItem>
          <Styled.ListItem>
            <Styled.Link href="https://twitter.com/antonioqueb_" target="_blank" rel="noopener noreferrer" isDarkMode={isDarkMode}>
              <Styled.Icon isDarkMode={isDarkMode} onClick={handleTwitterClick}>
                <FaTwitter />
              </Styled.Icon>
            </Styled.Link>
          </Styled.ListItem>
        </Styled.List>
      </Styled.Section>
      <Styled.Div isDarkMode={isDarkMode}>
        <p>Copyright © 2023 queb.online</p>
      </Styled.Div>
    </Styled.Footer>
  );
};

export default FooterDisplay;
