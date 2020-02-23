import React from 'react';
import styled from 'styled-components';

import Section from './Section';
import franceBleu from '../images/france_bleu_limousin_logo.png';

const Wrapper = styled(Section)`
  img {
    box-shadow: none !important;
    margin: 32px auto !important;
  }
`;

const Medias = () => {
  return (
    <Wrapper id="on-parle-de-nous">
      <h1>On parle de nous</h1>
      <a
        href="https://www.francebleu.fr/emissions/ici-c-est-limouzi/limousin"
        target="_blank"
      >
        <img alt="France Bleu Limousin" src={franceBleu} />
      </a>

      <video width="480" controls poster={'/poster.png'}>
        <source src={'/tv_reportage.mp4'} />
        <source src={'/tv_reportage.ogm'} />
        <source src={'/tv_reportage.webm'} />
      </video>
    </Wrapper>
  );
};

export default Medias;
