import styled from 'styled-components';
import Img from 'gatsby-image/withIEPolyfill';

import { device } from '../../utils/media';

export const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
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
  position: absolute !important;
  z-index: 2;
  top: 10%;
  right: 0;
  width: 56%;

  @media ${device.mobileL} {
    position: relative !important;
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
    color: rgb(60, 50, 40);
    font-family: 'Pintgram Regular';
    font-size: 2em;
    font-weight: 100;
    margin-bottom: 26vh;

    @media ${device.mobileL} {
      margin-bottom: 0;
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
`;

export const Thumbnail = styled(Img)`
  width: 18vw;
  height: 18vw;
  border-radius: 18vw;
  margin-right: 2vw;

  @media ${device.mobileL} {
    width: 8vw;
    height: 8vw;
    border-radius: 8vw;
  }
`;
