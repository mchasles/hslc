import React from 'react';

import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

const Section = styled.section`
  display: flex;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 80vh;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
`;

const BgImg = styled(Img)`
  width: 50vw;
  height: 60vh;
`;

const Thumbnail = styled(Img)`
  width: 10vw;
  height: 10vw;
  border-radius: 10vw;
  margin-right: 2vw;
`;

const Content = styled.div`
  width: 38vw;
  height: 60vh;
  padding: 0 6vw;
  display: flex;
  flex-direction: column;

  h1 {
    color: rgb(60, 50, 40);
    font-family: 'Pintgram Regular';
    font-size: 3em;
    font-weight: 100;
    margin: 0;
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
    margin-top: 0.6em;
  }

  p,
  li {
    color: rgb(80, 80, 75);
    font-size: 0.8em;
  }
`;

const Thumbnails = styled.div`
  display: flex;
  margin-top: auto;
`;

export default ({ reverse }) => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: { fields: { slug: { eq: "/data/pin-en-vert/" } } }
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
        bgImg: file(relativePath: { eq: "images/cabin.jpg" }) {
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
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <Thumbnails>
              <Thumbnail fluid={bgImg} loading="eager" />
              <Thumbnail fluid={bgImg} loading="eager" />
              <Thumbnail fluid={bgImg} loading="eager" />
            </Thumbnails>
          </Content>
          <BgImg fluid={bgImg} loading="eager" />
        </Section>
      );
    }}
  />
);
