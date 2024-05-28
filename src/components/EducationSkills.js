import React from 'react';
import styled from 'styled-components';
import cppLogo from '../assets/cpp.png';
import pythonLogo from '../assets/python.png';
import javaLogo from '../assets/java.png';
import htmlLogo from '../assets/html.png';
import cssLogo from '../assets/css.png';
import jsLogo from '../assets/javascript.png';

const Section = styled.section`
  text-align: center;
  padding: 20px;
  color: ${props => props.theme.colors.text};
  background: ${props => props.theme.colors.background};
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin: 10px 0;
  font-size: 1rem;
`;

const NestedList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin: 0; /* Remove margin */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0px; /* Remove gap between items */
  justify-items: center; /* Center items horizontally */
  align-items: center; /* Center items vertically */
`;

const NestedListItem = styled.li`
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px; /* Reduce margin */
`;

const Language = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
`;

const LanguageLogo = styled.img`
  width: 24px; /* Adjust the size as needed */
  height: 24px;
  margin-right: 5px; /* Reduced margin between logo and text */
`;

const EducationSkills = () => (
  <Section id="education-skills">
    <h2>Education & Skills</h2>
    <div>
      <h3>Education</h3>
      <List>
        <ListItem>Bachelors in Computer Science, University of California Riverside, 2024</ListItem>
        <ListItem>Assoicates in Math & Science,Moreno Valley College, 2022</ListItem>
        <ListItem>
          Relevant Coursework:
          <NestedList>
            <NestedListItem>Project in Database Systems</NestedListItem>
            <NestedListItem>Software Testing & Verification</NestedListItem>
            <NestedListItem>Principles of Web Development</NestedListItem>
            <NestedListItem>Intro to Artificial Intelligence</NestedListItem>
          </NestedList>
        </ListItem>
      </List>
    </div>
    <div>
      <h3>Skills</h3>
      <List>
        <ListItem>Programming Languages</ListItem>
        <NestedList>
          <NestedListItem>
            <Language>
              <LanguageLogo src={cppLogo} alt="C++" />
              C++
            </Language>
          </NestedListItem>
          <NestedListItem>
            <Language>
              <LanguageLogo src={pythonLogo} alt="Python" />
              Python
            </Language>
          </NestedListItem>
          <NestedListItem>
            <Language>
              <LanguageLogo src={javaLogo} alt="Java" />
              Java
            </Language>
          </NestedListItem>
          <NestedListItem>
            <Language>
              <LanguageLogo src={htmlLogo} alt="HTML" />
              HTML
            </Language>
          </NestedListItem>
          <NestedListItem>
            <Language>
              <LanguageLogo src={cssLogo} alt="CSS" />
              CSS
            </Language>
          </NestedListItem>
          <NestedListItem>
            <Language>
              <LanguageLogo src={jsLogo} alt="JavaScript" />
              JavaScript
            </Language>
          </NestedListItem>
        </NestedList>
      </List>
    </div>
  </Section>
);

export default EducationSkills;
