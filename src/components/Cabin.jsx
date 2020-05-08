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
  padding-top: 128px;
  margin-bottom: 48px;

  @media ${device.mobileL} {
    flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};

    margin-bottom: 0;
  }
`;

const BgImg = styled(Img)`
  z-index: 2;

  @media ${device.mobileL} {
    width: 42%;
    flex-grow: 1;
    img {
      height: inherit !important;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 6vw;

  @media ${device.mobileL} {
    position: relative;
  }

  h1 {
    position: absolute;
    top: 64px;
    display: inline-block;
    padding: 0;
    margin: 0;

    color: rgb(60, 50, 40);
    font-family: 'Shopie';
    font-size: 42px;
    font-weight: 100;

    @media ${device.mobileL} {
      position: relative;
      top: 0;
      font-size: 52px;
      margin-bottom: 36px;
    }

    .gatsby-resp-image-wrapper {
      position: absolute !important;
      z-index: -1;
      width: 60%;
      bottom: -28%;
      right: -36%;

      @media ${device.mobileL} {
        width: 80%;
        bottom: -64%;
        right: -46%;
      }
    }

    &::before {
      position: absolute;
      top: -12%;
      left: 16%;
      opacity: 0.6;
      content: 'CABANE';
      color: white;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 4vw;
      font-weight: 600;

      @media ${device.mobileL} {
        left: 16%;
        top: -14%;
        font-size: 18px;
      }
    }
  }

  h2 {
    color: rgb(60, 50, 40);
    font-family: 'Shopie';
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
    color: rgb(60, 50, 40);
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
