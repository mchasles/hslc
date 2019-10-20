import React from 'react';
import { Helmet } from 'react-helmet';
import styled, { createGlobalStyle } from 'styled-components';

import Menu from '../components/menu';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    overflow-x: hidden;
    background-color: #e6e6e6;
  }

  nav, ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

const Wrapper = styled.section`
  background: papayawhip;
`;

export default () => (
  <>
    <Helmet>
      <title>
        Hêtre sous le Charme - Cabanes perchées dans les arbres en Corrèze
        surplombant la Dordogne
      </title>
      <meta
        name="description"
        content="Hetre sous le charme - Cabanes dans les arbres en Correze, surplombant la Dordogne, hetresouslecharme.com est un site qui propose a la location des cabanes dans les arbres en Dordogne, Hetre sous le Charme Le Bourg 19400 Saint Martial Entraygues"
      />
      <meta
        name="keywords"
        content="Hetre sous le charme, Cabanes, perchees, arbres, Correze, Dordogne, hetresouslecharme.com, location, cabane, arbre, Le Bourg, Saint Martial, Entraygues, vacances, nature."
      />
    </Helmet>
      <GlobalStyle />
  </>
);
