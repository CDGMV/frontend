import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import theme from './styles/theme';

import RoutesNavigation from "./routes";

import {Main} from "./components/global";

import NavBar from './components/navbar';

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Overpass&display=swap"
          rel="stylesheet"
        />        
      </head>

      <main>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Main>
            <NavBar open={open} setOpen={setOpen} />
            <RoutesNavigation/>
          </Main>
        </ThemeProvider> 
      </main> 
    </>
  );
}