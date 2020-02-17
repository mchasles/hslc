import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image/withIEPolyfill';

import Page from '../components/Page';
import Button from '../components/Button';
import Panoramic from '../components/Panoramic';
import Cabin from '../components/Cabin';

const Section = styled.section`
  position: relative;
  height: 100vh;
`;

const BgImg = styled(Img)`
  height: 100vh;
`;

const LogoWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BookButton = styled(Button)`
  margin-top: 24px;
`;

export default ({ data }) => {
  const bgImg = data.bgImg.childImageSharp.fluid;
  const logoImg = data.logo.childImageSharp.fixed;

  return (
    <Page>
      <Section id="nos-cabanes">
        <LogoWrapper>
          <Img
            fixed={logoImg}
            fadeIn={false}
            durationFadeIn={50000}
            objectFit="contain"
            style={{ width: '50vw' }}
          />
          <BookButton>Réservez</BookButton>
        </LogoWrapper>
        <BgImg fluid={bgImg} durationFadeIn={1000} />
      </Section>
      <Section id="prestations">
        <Panoramic />
      </Section>
      <Cabin />
      <Cabin reverse />
      <Cabin />
    </Page>
  );
};

export const query = graphql`
  query {
    bgImg: file(relativePath: { eq: "images/home.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    logo: file(relativePath: { eq: "images/logo_white.png" }) {
      childImageSharp {
        fixed(width: 300) {
          src
          srcSet
          width
          height
        }
      }
    }
  }
`;
