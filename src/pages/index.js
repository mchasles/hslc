import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import styled, { createGlobalStyle } from 'styled-components';
import Img from 'gatsby-image';
import Menu from '../components/menu';

const GlobalStyle = createGlobalStyle`
  html {
    background-color: rgba(0, 0, 0);
  }
  body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    overflow-x: hidden;
    background-color: #e6e6e6;
    -webkit-overflow-scrolling: auto;
  }

  nav, ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

const Wrapper = styled.section`
  background: rgb(255, 255, 255);
`;

const BgImg = styled(Img)`
  width: 100vw;
  height: 100vh;
`;

const LogoImg = styled(Img)`
  position: absolute;
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
      </Helmet>
      <Wrapper>
        <GlobalStyle />
        <LogoImg
          fixed={logoImg}
          fadeIn={false}
          durationFadeIn={50000}
          style={{ position: 'absolute' }}
        />
        <BgImg fluid={bgImg} durationFadeIn={2000} />
        <Menu>
          {titles.map(({ value }) => (
            <Menu.item>
              <Menu.link>{value}</Menu.link>
            </Menu.item>
          ))}
        </Menu>
        fr
        <br />
        fr
        <br />
        fr
        <br />
        fr
        <br />
        fr
        <br />
        fr
        <br />
        fr
        <br />
        fr
        <br />
        fr
        <br />
        fr
        <br />
        fr
        <br />
        fr
        <br />
        fr
        <br />
        fr
        <br />
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
