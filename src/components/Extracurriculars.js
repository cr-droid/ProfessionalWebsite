import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  text-align: center;
  padding: 20px;
  color: ${props => props.theme.colors.text};
  background: ${props => props.theme.colors.background};
`;

const Extracurriculars = () => (
  <Section id="extracurriculars">
    <h2>Extracurricular Activities</h2>
    <ul>
      <li>Cutie Hack 2022, 2023</li>
      <li></li>
    </ul>
  </Section>
);

export default Extracurriculars;
