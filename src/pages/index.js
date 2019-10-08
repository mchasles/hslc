import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

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
    <Wrapper>Hello world!</Wrapper>
  </>
);
