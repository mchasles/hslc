import React from 'react';
import styled from 'styled-components';

import Section from '../Section';
import franceBleu from '../../images/qui-sommes-nous/france_bleu_limousin_logo.png';
import logosPresse from '../../images/qui-sommes-nous/logos_presse.png';

const Wrapper = styled(Section)`
  p {
    margin-bottom: 16px;
    text-align: center;
  }
`;

const MediaImg = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 32px 0;

  img {
    margin: auto;
  }
  img.logos-presse {
    width: 100%;
    max-width: 530px;
    margin: auto;
  }
`;

const MediaText = styled.div`
  text-align: center;
  padding: 32px 0 0 0;
`;

const MediaAudio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 0 0 0;

  audio {
    margin: auto;
  }
`;

const MediaVideo = styled.div`
  max-width: 560px;
  padding: 32px 0 16px 0;
  margin: auto;
`;

const Video = styled.div`
  position: relative;
  padding-bottom: 54.25%;
  height: 0;
  background-color: black;
  border: 6px solid rgb(165, 168, 84);
  border-radius: 8px;

  video,
  iframe {
    position: absolute;
    top: 2.5%;
    left: 2.5%;
    right: 2.5%;
    bottom: 2.5%;
    width: 95%;
    height: 95%;
  }
`;

const Medias = () => {
  return (
    <Wrapper id="on-parle-de-nous">
      <h1>On parle de nous</h1>
      <MediaImg>
        <p>Reportage radiophonique France Bleu Limousin</p>
        <a
          href="https://www.francebleu.fr/emissions/ici-c-est-limouzi/limousin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img alt="France Bleu Limousin" src={franceBleu} />
        </a>
      </MediaImg>
      <MediaVideo>
        <p>Reportage télévisuel du journal week end de TF1</p>
        <Video>
          <video controls poster={'/poster.png'}>
            <source src={'/tv_reportage.mp4'} />
            <source src={'/tv_reportage.ogm'} />
            <source src={'/tv_reportage.webm'} />
          </video>
        </Video>
      </MediaVideo>
      <MediaVideo>
        <p>Reportage télévisuel du journal de Jean-Pierre Pernaut</p>
        <Video>
          <iframe
            title="Reportage télévisuel du journal de Jean-Pierre Pernaut"
            src="https://www.youtube.com/embed/zO4sjjabCTg?rel=0"
            allowFullScreen
            frameBorder={0}
          ></iframe>
        </Video>
      </MediaVideo>
      <MediaVideo>
        <p>
          Reportage réalisé par Christophe Dubois, ambassadeur de la Corrèze
        </p>
        <Video>
          <iframe
            title="Reportage réalisé par Christophe Dubois, ambassadeur de la Corrèze"
            src="https://www.youtube.com/embed/igv3rcI5a1E?rel=0"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </Video>
      </MediaVideo>
      <MediaText>
        <p>
          À voir aussi sur France 2 pour l'émission
          <a
            className="contact_link"
            href="http://telematin.france2.fr/?page=chronique&amp;id_mot=25&amp;id_article=39525"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            Télé Matin
          </a>
        </p>
        <p>
          <a
            className="contact_link"
            href="http://m.leparisien.fr/environnement/conso/tourisme-des-cabanes-pour-passer-la-nuit-en-pleine-nature-24-08-2015-5001869.php#xtref=http%3A%2F%2Fwww.leparisien.fr%2Fenvironnement%2Fconso%2Ftourisme-des-cabanes-pour-passer-la-nuit-en-pleine-nature-24-08-2015-5001869.php"
            target="_blank"
            rel="noopener noreferrer"
          >
            Le Parisien
          </a>{' '}
          a écrit un article sur Hêre sous le Charme ainsi que{' '}
          <a
            className="contact_link"
            href="http://shinythoughts.net/?s=corr%C3%A8ze"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shiny Thoughts
          </a>
        </p>
      </MediaText>
      <MediaAudio>
        <p>Nous sommes aussi sur les ondes pour France Info</p>
        <audio controls>
          <source src={'/cabanes.mp3'} />
          <source src={'/cabanes.ogg'} />
          <source src={'/tv_reportage.webm'} />
        </audio>
      </MediaAudio>
      <MediaText>
        <p>La presse se déchaîne !</p>
        <p>
          {' '}
          Retrouvez nous sur{' '}
          <a
            className="contact_link"
            href="http://www.reisreporter.be/2012/08/28/overnachten-in-boomhutten/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ReisReporter
          </a>{' '}
          ou sur{' '}
          <a
            className="contact_link"
            href="http://www.babel-voyages.com/bons-plans/361-correze-hetre-sous-le-charme-de-ces-adorables-cabanes"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            Babel Voyages
          </a>
        </p>
      </MediaText>
      <MediaImg>
        <p>
          Tous leurs articles nous concernant se trouvent sur{' '}
          <a
            href="./presse-hetre-sous-le-charme.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            ce fichier pdf
          </a>
          .
        </p>
        <img className="logos-presse" alt="Logos Presse" src={logosPresse} />
      </MediaImg>
    </Wrapper>
  );
};

export default Medias;
