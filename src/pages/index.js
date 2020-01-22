import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import styled, { createGlobalStyle } from 'styled-components';
import Img from 'gatsby-image/withIEPolyfill';
import Menu from '../components/Menu';
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
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    overflow-x: hidden;
    background-color: rgb(230, 230, 230);
    
  }

  nav, ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

`;

const Wrapper = styled.div`
  height: 100vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
  background: rgb(255, 255, 255);
`;

const Section = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const BgImg = styled(Img)`
  width: 100vw;
  height: 100vh;
`;

const LogoImg = styled(Img)`
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
        <Menu>
          {titles.map(({ value }) => (
            <Menu.item>
              <Menu.link href={`#${value.replace(/\s+/g, '-').toLowerCase()}`}>
                {value}
              </Menu.link>
            </Menu.item>
          ))}
        </Menu>
        <Section id="nos-cabanes">
          <LogoImg
            fixed={logoImg}
            fadeIn={false}
            durationFadeIn={50000}
            style={{ position: 'absolute', width: '33vw' }}
            objectFit="contain"
          />
          <BgImg fluid={bgImg} durationFadeIn={4000} />
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
