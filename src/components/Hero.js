import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  text-align: center;
  padding: 100px 20px;
  color: ${props => props.theme.colors.text};
  background: ${props => props.theme.colors.background};
`;

const Hero = () => (
  <HeroSection id="hero">
    <h1>Christian Ruiz</h1>
    <p>I'm a recent <strong className="text-stone-100">UCR gradaute</strong>, bachelor's in 
         <strong className="text-stone-100"> Computer Science</strong>. I am a 2nd generation immigrant and I 
         hope to empower my family into believing that they too can graduate university and get into fields 
         that seem intimidating to be successful in.
    </p>
  </HeroSection>
);

export default Hero;
