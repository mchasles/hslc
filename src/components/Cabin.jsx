import React from 'react';

import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image/withIEPolyfill';

import { device } from '../utils/media';
import pinEnvert from '../images/nos-cabanes/logo-pin_en_vert.jpg';

const Section = styled.section`
  position: relative;
  display: flex;
  align-items: top;
  flex-direction: column;

  @media ${device.mobileL} {
    flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  }
`;

const BgImg = styled(Img)`
  z-index: 2;
  width: 70%;
  margin-left: auto;

  @media ${device.mobileL} {
    width: 50%;
    margin-left: auto;
  }
`;

const LogoImg = styled.img`
  position: absolute;
  z-index: 1;
  width: 38vw;
  min-width: 100px;
  left: 58%;
  top: -10%;

  @media ${device.mobileL} {
    width: 18vw;
    left: 68%;
    top: -8%;
  }
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  padding: 0 6vw;

  @media ${device.mobileL} {
    margin-left: 2%;
  }

  h1 {
    color: rgb(60, 50, 40);
    font-family: 'Pintgram Regular';
    font-size: 2em;
    font-weight: 100;
    margin: 0;

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
    @media ${device.mobileL} {
      margin-top: 0.6em;
    }
  }

  p,
  li {
    color: rgb(80, 80, 75);
    font-size: 0.8em;
  }

  @media ${device.mobileL} {
    width: 38%;
  }
`;

const Description = styled.div`
  z-index: 2;
`;

const Thumbnails = styled.div`
  display: flex;

  @media ${device.mobileL} {
  }
`;

const Thumbnail = styled(Img)`
  width: 16vw;
  height: 16vw;
  border-radius: 16vw;
  margin-right: 2vw;

  @media ${device.mobileL} {
    width: 10vw;
    height: 10vw;
    border-radius: 10vw;
  }
`;

export default ({ reverse }) => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: { fields: { slug: { eq: "/data/nos-cabanes/pin-en-vert/" } } }
        ) {
          edges {
            node {
              headings {
                value
                depth
              }
              html
            }
          }
        }
        bgImg: file(
          relativePath: { eq: "images/nos-cabanes/pin_en_vert.png" }
        ) {
          childImageSharp {
            fluid(maxWidth: 2880) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      const bgImg = data?.bgImg.childImageSharp.fluid;
      const html = data.allMarkdownRemark.edges[0]?.node.html;

      return (
        <Section reverse={reverse}>
          <Content>
            <Description dangerouslySetInnerHTML={{ __html: html }} />
            <Thumbnails>
              <Thumbnail fluid={bgImg} loading="eager" />
              <Thumbnail fluid={bgImg} loading="eager" />
              <Thumbnail fluid={bgImg} loading="eager" />
            </Thumbnails>
            <LogoImg src={pinEnvert} alt="Pin en vert" />
          </Content>
          <BgImg fluid={bgImg} objectFit="contain" loading="eager" />
        </Section>
      );
    }}
  />
);
