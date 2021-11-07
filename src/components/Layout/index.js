import React, { useEffect } from 'react';

import { useTheme } from 'styled-components';

import Header from '../Header';
import PostsList from '../PostsList';
import Footer from '../Footer';

export default function Layout({ onToggleTheme, selectedTheme }) {

  const theme = useTheme(); // para pegar o thema atual da pagina

  console.log(theme);

  return (
    <>
      <Header onToggleTheme={onToggleTheme} selectedTheme={selectedTheme} />
      <PostsList />
      <Footer onToggleTheme={onToggleTheme} selectedTheme={selectedTheme} />
    </>
  );
}
