import React from 'react';
import styled from 'styled-components';
import resume from '../assets/resume_v4.pdf';

const Section = styled.section`
  text-align: center;
  padding: 20px;
  color: ${props => props.theme.colors.text};
  background: ${props => props.theme.colors.background};
`;

const ResumeLink = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.textOnPrimary};
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.3s ease;
  background-color: #3b3b3b;

  &:hover {
    background: ${props => props.theme.colors.primaryHover};
  }
`;

const About = () => (
  <Section id="about">
    <h2>About Me</h2>
    <p>
    I am the first person in my family to graudate from a university. Both my parents are Mexican, which makes me a 
  Chicano. I developed my interest in computers at an early age, when I received my first laptop at 10 years old. I later built
  my own PC at 16, with money I saved up from doing yardwork and chores. During this time, I was also in AP computer sicence principles,
  which strengthened my liking of computers. And I eventually decided to pursue an education in computer science. I like to watch the NBA,
  NFL, and occassionally MLB. I spend most of my free time going to the gym or learning about new technologies.
    </p>
    <ResumeLink href={`${resume}?v=${Date.now()}`} target="_blank">
    View Resume
    </ResumeLink>

  </Section>
);

export default About;
