import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import styled, { createGlobalStyle } from 'styled-components';
import Img from 'gatsby-image/withIEPolyfill';
import Menu from '../components/Menu';
import Button from '../components/Button';
import Panoramic from '../components/Panoramic';
import Cabin from '../components/Cabin';
import fontFiles from '../fonts';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pintgram Regular';
    font-style: normal;
    font-weight: normal;
    src: local('Pintgram Regular'), url(${fontFiles.PintgramRegular}) format('woff');
  }

  html {
    background-color: rgba(0, 0, 0);
  }

  body {
    overflow: hidden;
    margin: 0;

    background-color: #e6e6e6;
    font-family: Arial, Helvetica, sans-serif;
  }

  nav, ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

`;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  scroll-behavior: smooth;
`;

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

  width: 50vw;
`;

const BookButton = styled(Button)`
  margin-top: 24px;
`;

export default ({ data }) => {
  const titles = data.allMarkdownRemark.edges[0]?.node.headings;
  const bgImg = data.bgImg.childImageSharp.fluid;
  const logoImg = data.logo.childImageSharp.fixed;

  return (
    <>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <meta name="description" content={data.site.siteMetadata.description} />
        <meta name="keywords" content="" />
        <meta name="robots" content="noindex" />
        <meta name="googlebot" content="noindex" />
      </Helmet>
      <Wrapper>
        <GlobalStyle />
        <Menu titles={titles} />
        <Section id="nos-cabanes">
          <LogoWrapper>
            <Img
              fixed={logoImg}
              fadeIn={false}
              durationFadeIn={50000}
              objectFit="contain"
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
      </Wrapper>
    </>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: { fields: { slug: { eq: "/data/menu/" } } }) {
      edges {
        node {
          fields {
            slug
          }
          headings {
            value
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
