import React from 'react';

import Page from '../components/Page';

import ToKnow from '../components/infos-pratiques/ToKnow';
import Prices from '../components/infos-pratiques/Prices';
import Meal from '../components/infos-pratiques/Meal';
import Extras from '../components/infos-pratiques/Extras';
import Activities from '../components/infos-pratiques/Activities';

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
