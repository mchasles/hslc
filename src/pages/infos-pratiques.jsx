import React from 'react';
import styled from 'styled-components';

import Page from '../components/Page';
import PageHeader from '../components/PageHeader';
import ToKnow from '../components/infos-pratiques/ToKnow';
import Prices from '../components/infos-pratiques/Prices';
import Meal from '../components/infos-pratiques/Meal';
import Extras from '../components/infos-pratiques/Extras';
import Activities from '../components/infos-pratiques/Activities';

const Text = styled.span`
  margin-left: 22%;
  margin-bottom: -12%;
`;

export default () => {
  return (
    <Page bgImgs={false}>
      <PageHeader page="infos">
        <Text>Infos</Text> Pratiques
      </PageHeader>
      <ToKnow />
      <Prices />
      <Meal />
      <Extras />
      <Activities />
    </Page>
  );
};
