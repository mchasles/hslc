import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import Img from 'gatsby-image/withIEPolyfill';

const Wrapper = styled.div`
  position: relative;
`;

const Title = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: rgb(255, 255, 255);
  font-family: 'Pintgram Regular';
  font-size: calc(3vw + 3vh + 0.8vmin);
  font-weight: 100;
  white-space: nowrap;
  letter-spacing: 2px;
  text-shadow: 1px 1px 8px rgba(0, 0, 0, 0.6);

  span {
    display: block;
    font-family: Arial, Helvetica, sans-serif;
    font-size: calc(1.6vw + 1.2vh + 0.6vmin);
    font-weight: 600;
    letter-spacing: inherit;
  }
`;

const PageHeader = ({ children }) => {
  const data = useStaticQuery(query);
  const panoramicImg = data.panoramicImg.childImageSharp.fluid;

  return (
    <Wrapper>
      <Img fluid={panoramicImg} />
      <Title>{children}</Title>
    </Wrapper>
  );
};

export const query = graphql`
  query {
    panoramicImg: file(relativePath: { eq: "images/panoramic.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default PageHeader;
