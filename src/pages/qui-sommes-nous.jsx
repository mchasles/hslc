import React from 'react';

import Page from '../components/Page';
import PageHeader from '../components/PageHeader';
import Introducing from '../components/qui-sommes-nous/Introducing';
import Philosophy from '../components/qui-sommes-nous/Philosophy';
import Medias from '../components/qui-sommes-nous/Medias';

const Infos = () => {
  return (
    <Page bgImgs={false}>
      <PageHeader>
        <span>Qui</span> Somme Nous ?
      </PageHeader>
      <Introducing />
      <Philosophy />
      <Medias />
    </Page>
  );
};

export default Infos;
