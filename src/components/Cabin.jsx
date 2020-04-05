import React from 'react';

import styled from 'styled-components';
import Img from 'gatsby-image/withIEPolyfill';

import { device } from '../utils/media';
import BookButton from './BookButton';
import Photos from './Photos';

const Cabin = ({ id, title, reverse = false, html, img, logo, photos }) => {
  return (
    <Section id={id} reverse={reverse}>
      <Content>
        <Description dangerouslySetInnerHTML={{ __html: html }} />
        <BookCabinButton />
        <Photos photos={photos} />
        <LogoImg fluid={logo} alt={title} />
      </Content>
      <BgImg fluid={img} objectFit="contain" />
    </Section>
  );
};

export default Cabin;

const BookCabinButton = styled(BookButton)`
  margin: 1.2em 0 2em 0;
`;

const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column-reverse;

  align-items: top;
  margin-bottom: 32px;

  @media ${device.mobileL} {
    flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
    padding-top: 64px;
    margin-bottom: 0;
  }
`;

const BgImg = styled(Img)`
  @media ${device.mobileL} {
    width: 42%;
    flex-grow: 1;
    img {
      height: inherit !important;
    }
  }
`;

const LogoImg = styled(Img)`
  position: absolute !important;
  z-index: 1;
  width: 24vw;
  left: 26%;
  top: 0;

  @media ${device.mobileL} {
    width: 14vw;
    left: 38%;
    top: -4%;
  }
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  padding: 0 6vw;

  h1 {
    position: relative;
    color: rgb(60, 50, 40);
    font-family: 'Pintgram Regular';
    font-size: 2em;
    font-weight: 100;

    &::before {
      position: absolute;
      top: -30%;
      left: 8%;
      opacity: 0.6;
      content: 'CABANE';
      color: white;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 0.4em;
      font-weight: 600;
    }

    @media ${device.mobileL} {
      font-size: 3em;
    }
  }

  h2 {
    color: rgb(100, 90, 80);
    font-family: 'Pintgram Regular';
    font-size: 1.4em;
    font-weight: 100;
    margin-bottom: 0;
  }

  h2 + ul,
  h2 + p {
    margin-top: 0;
  }

  p,
  li {
    color: rgb(80, 80, 75);
    font-size: 0.8em;
    margin-top: 0;
    @media ${device.mobileL} {
      margin-top: 0.6em;
    }
  }

  ul {
    padding-left: 16px;
  }

  li {
    list-style-type: disc;
    list-style-position: outside;
  }

  @media ${device.mobileL} {
    width: 38%;
  }
`;

const Description = styled.div`
  z-index: 2;
`;