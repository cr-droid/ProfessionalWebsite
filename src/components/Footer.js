import React from 'react';
import styled, { keyframes } from 'styled-components';
import linkedinLogo from '../assets/linkedin3.png';
import githubLogo from '../assets/github2.png';
import gmailLogo from '../assets/gmail1.png';

const FooterSection = styled.footer`
  padding: 20px;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  text-align: center;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Icon = styled.img`
  width: 75px;
  height: 75px;
  margin: 0 10px;
  vertical-align: middle;
  animation: ${rotate} 6s linear infinite;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

const Footer = () => (
  <FooterSection id='contact'>
    <ul>
      <li>
        <a href="https://www.linkedin.com/in/christian-ruiz-581a761b8/" target="_blank" rel="noopener noreferrer">
          <Icon src={linkedinLogo} alt="LinkedIn" />
        </a>
      </li>
      <li>
        <a href="https://github.com/cr-droid" target="_blank" rel="noopener noreferrer">
          <Icon src={githubLogo} alt="GitHub" />
        </a>
      </li>
      <li>
        <a href="mailto:christianruiz301@gmail.com" target="_blank" rel="noopener noreferrer">
          <Icon src={gmailLogo} alt="Email" />
        </a>
      </li>
    </ul>
  </FooterSection>
);

export default Footer;
