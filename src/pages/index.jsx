import React from 'react';
import { graphql } from 'gatsby';
import styled, { css } from 'styled-components';
import Img from 'gatsby-image/withIEPolyfill';

import Page from '../components/Page';
import BookButton from '../components/BookButton';
import EpiceaSouhait from '../components/nos-cabanes/EpiceaSouhait';
import PinEnVert from '../components/nos-cabanes/PinEnVert';
import HouxBlond from '../components/nos-cabanes/HouxBlond';
import DesChesnaies from '../components/nos-cabanes/DesChesnaies';
import { ModalProvider } from '../components/Modal';

const Section = styled.section`
  position: relative;
  height: 100vh;
`;

const BgImg = styled(Img)`
  height: 100%;
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

const BookButtonStyled = styled(BookButton)`
  margin-top: 24px;
`;

const SectionPanoramic = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 48px;

  ${BookButtonStyled} {
    margin: 32px auto 32px;
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
    <ModalProvider>
      <Page bgImgs={false} marginBottom>
        <Section id="nos-cabanes">
          <LogoWrapper>
            <Img
              fixed={logoImg}
              fadeIn={false}
              durationFadeIn={50000}
              objectFit="contain"
              style={{ width: '50vw' }}
            />
            <BookButtonStyled />
          </LogoWrapper>
          <BgImg
            fluid={bgImg}
            objectPosition="50% 100%"
            durationFadeIn={1000}
          />
        </Section>
        <SectionPanoramic>
          <Heading1 dangerouslySetInnerHTML={{ __html: headings[1] }} />
          <Img fluid={panoramicImg} />
          <BookButtonStyled />
          <Heading2 dangerouslySetInnerHTML={{ __html: headings[2] }} />
        </SectionPanoramic>
        <EpiceaSouhait />
        <PinEnVert />
        <HouxBlond />
        <DesChesnaies />
      </Page>
    </ModalProvider>
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
    bgImg: file(relativePath: { eq: "images/home.jpg" }) {
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
    panoramicImg: file(relativePath: { eq: "images/panoramic.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
