import React from 'react';

import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

const BgImg = styled(Img)`
  width: 100vw;
  height: 100vh;
`;

export default () => (
  <StaticQuery
    query={graphql`
      query {
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

      return <BgImg fluid={bgImg} durationFadeIn={2000} />;
    }}
  />
);
