import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import EducationSkills from './components/EducationSkills';
import Experience from './components/Experience';
import Extracurriculars from './components/Extracurriculars';
import Footer from './components/Footer';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <div>
      <Navbar />
      <Hero />
      <About />
      <EducationSkills />
      <Experience />
      <Extracurriculars />
      <Footer />
    </div>
  </ThemeProvider>
);

export default App;
