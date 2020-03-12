import styled from 'styled-components';
import Img from 'gatsby-image/withIEPolyfill';

import { device } from '../../utils/media';

import BookButton from '../BookButton';

export const BookCabinButton = styled(BookButton)`
  margin: 1.2em 0 2em 0;
`;

export const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column-reverse;

  align-items: top;
  margin-bottom: 32px;

  @media ${device.mobileL} {
    flex-direction: row;
    padding-top: 64px;
    margin-bottom: 0;
  }
`;

export const SectionRight = styled(Section)`
  @media ${device.mobileL} {
    flex-direction: row-reverse;
  }
`;

export const BgImg = styled(Img)`
  @media ${device.mobileL} {
    width: 42%;
    flex-grow: 1;
    img {
      height: inherit !important;
    }
  }
`;

export const LogoImg = styled.img`
  position: absolute;
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

export const Content = styled.div`
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

export const ContentLeft = styled(Content)`
  @media ${device.mobileL} {
    padding-left: 6vw;
    margin-left: 2%;
  }
`;

export const ContentRight = styled(Content)`
  @media ${device.mobileL} {
    padding-right: 6vw;
    margin-right: 2%;
  }
`;

export const Description = styled.div`
  z-index: 2;
`;

export const Thumbnails = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Thumbnail = styled(Img)`
  width: 14vw;
  height: 14vw;
  border-radius: 14vw;

  @media ${device.mobileL} {
    width: 8vw;
    height: 8vw;
    border-radius: 8vw;
  }
`;
