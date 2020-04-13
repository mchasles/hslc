import React from 'react';
import styled from 'styled-components';

import Page from '../components/Page';
import PageHeader from '../components/PageHeader';
import Introducing from '../components/qui-sommes-nous/Introducing';
import Philosophy from '../components/qui-sommes-nous/Philosophy';
import Medias from '../components/qui-sommes-nous/Medias';

const Text = styled.span`
  margin-left: 30%;
  margin-bottom: -4%;
`;

export default () => {
  return (
    <Page bgImgs={false}>
      <PageHeader>
        <Text>Qui</Text> Somme Nous ?
      </PageHeader>
      <Introducing />
      <Philosophy />
      <Medias />
    </Page>
  );
};
