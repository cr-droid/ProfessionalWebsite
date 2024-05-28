import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #3b3b3b;
  padding: 10px 0;
  z-index: 1000;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 15px;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => (
  <Nav>
    <NavList>
      <NavItem><NavLink href="#hero">Home</NavLink></NavItem>
      <NavItem><NavLink href="#about">About</NavLink></NavItem>
      <NavItem><NavLink href="#education-skills">Education & Skills</NavLink></NavItem>
      <NavItem><NavLink href="#experience">Experience & Projects</NavLink></NavItem>
      <NavItem><NavLink href="#extracurriculars">Extracurriculars</NavLink></NavItem>
      <NavItem><NavLink href="#contact">Contact</NavLink></NavItem>
    </NavList>
  </Nav>
);

export default Navbar;
