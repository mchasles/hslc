import React from 'react';

import { StaticQuery, graphql } from 'gatsby';
import styled, { css } from 'styled-components';
import Img from 'gatsby-image';

const BgImg = styled(Img)`
  position: absolute;
  top: calc(25% + 40px);
  width: 100vw;
  height: calc(40% - 20px);
`;

const headingStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 2;
  width: 80vw;
  padding: 0 10vw;
  margin: 0;
  color: rgb(90, 90, 90);
  font-weight: 100;
  font-style: italic;
  text-align: center;
`;

const Heading1 = styled.h1`
  ${headingStyles}
  top: 60px;
  height: calc(25% - 20px);
  font-size: 18px;
`;

const Heading2 = styled.h2`
  ${headingStyles}
  top: calc(65% + 20px);
  height: calc(35% - 20px);
  font-size: 14px;
  line-height: 24px;
`;

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: { fields: { slug: { eq: "/data/panoramic/" } } }
        ) {
          edges {
            node {
              headings {
                value
                depth
              }
            }
          }
        }
        bgImg: file(relativePath: { eq: "images/panoramic.jpg" }) {
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
      const headings = data.allMarkdownRemark.edges[0]?.node.headings.reduce(
        (acc, { depth, value }) => {
          return {
            ...acc,
            [depth]: value,
          };
        },
        {}
      );
      return (
        <>
          <Heading1>
            <span>{headings[1]}</span>
          </Heading1>
          <Heading2>
            <span>{headings[2]}</span>
          </Heading2>
          <BgImg fluid={bgImg} loading="eager" />
        </>
      );
    }}
  />
);
