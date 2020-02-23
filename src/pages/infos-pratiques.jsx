import React from 'react';

import Page from '../components/Page';
import ToKnow from '../components/ToKnow';
import Prices from '../components/Prices';
import Meal from '../components/Meal';
import Extras from '../components/Extras';
import Activities from '../components/Activities';

const Infos = () => {
  return (
    <Page>
      <ToKnow />
      <Prices />
      <Meal />
      <Extras />
      <Activities />
    </Page>
  );
};

export default Infos;
