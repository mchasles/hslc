import React from 'react';

import Page from '../components/Page';
import Introducing from '../components/Introducing';
import Philosophy from '../components/Philosophy';
import Medias from '../components/Medias';

const Infos = () => {
  return (
    <Page>
      <Introducing />
      <Philosophy />
      <Medias />
    </Page>
  );
};

export default Infos;
