import React, { useState, useMemo, useEffect, useRef } from 'react';
import GlobalStyle from './styles/global';
import Layout from './components/Layout';
import { ThemeProvider } from 'styled-components';
import themes from './styles/themes';

function App() {
  const firstRender = useRef(true);

  const [theme, setTheme] = useState('dark');

  const currentTheme = useMemo(() => {
    return themes[theme] ||themes.dark;
  },[theme]);

  function handleToggleTheme() {
    setTheme(prevState => prevState === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    if(firstRender.current) {
      firstRender.current = false;
      console.log('não executei os dados do useEffect')
      return;
    }
    console.log('executei os dados do useEffect');
  },[theme])

  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        <Layout onToggleTheme={handleToggleTheme} selectedTheme={theme} />
      </ThemeProvider>
    </>
  );
};

export default App;
