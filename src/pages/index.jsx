import React from 'react';
import { graphql } from 'gatsby';
import styled, { css } from 'styled-components';
import Img from 'gatsby-image/withIEPolyfill';

import Page from '../components/Page';
import Button from '../components/Button';
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

  max-width: 300px;
  overflow: hidden;
`;

const BookButton = styled(Button)`
  margin-top: 24px;
`;

const SectionPanoramic = styled.section`
  display: flex;
  flex-direction: column;

  ${BookButton} {
    margin: 0 auto 32px;
  }
`;

const headingStyles = css`
  display: flex;
  align-items: center;
  max-width: 60%;
  margin: 0 auto;
  color: rgb(42, 38, 27);
  font-weight: 100;
  font-style: italic;
  text-align: center;
`;

const Heading1 = styled.h1`
  ${headingStyles}
  margin: 36px auto;
  font-size: 18px;
`;

const Heading2 = styled.h2`
  ${headingStyles}
  font-size: 14px;
  line-height: 24px;
  flex-grow: 1;
`;

export default ({ data }) => {
  const bgImg = data.bgImg.childImageSharp.fluid;
  const logoImg = data.logoImg.childImageSharp.fixed;
  const panoramicImg = data.panoramicImg.childImageSharp.fluid;
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
    <Page bgImgs={false}>
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
        <BgImg fluid={bgImg} objectPosition="50% 100%" durationFadeIn={1000} />
      </Section>
      <SectionPanoramic>
        <Heading1 dangerouslySetInnerHTML={{ __html: headings[1] }} />
        <Img fluid={panoramicImg} loading="eager" />
        <BookButton>Réservez</BookButton>
        <Heading2 dangerouslySetInnerHTML={{ __html: headings[2] }} />
      </SectionPanoramic>
      <Cabin />
      <Cabin reverse />
      <Cabin />
    </Page>
  );
};

export const query = graphql`
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
    bgImg: file(relativePath: { eq: "images/accueil.png" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    logoImg: file(relativePath: { eq: "images/logo_white.png" }) {
      childImageSharp {
        fixed(width: 300) {
          src
          srcSet
          width
          height
        }
      }
    }
    panoramicImg: file(relativePath: { eq: "images/panoramic.png" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
