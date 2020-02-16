import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import styled, { createGlobalStyle } from 'styled-components';
import Menu from '../components/Menu';
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

const query = graphql`
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
  }
`;

const Page = ({ children }) => (
  <StaticQuery
    query={query}
    render={data => {
      const titles = data.allMarkdownRemark.edges[0]?.node.headings;

      return (
        <>
          <Helmet>
            <title>{data.site.siteMetadata.title}</title>
            <meta
              name="description"
              content={data.site.siteMetadata.description}
            />
            <meta name="keywords" content="" />
            <meta name="robots" content="noindex" />
            <meta name="googlebot" content="noindex" />
          </Helmet>
          <Wrapper>
            <GlobalStyle />
            <Menu titles={titles} />
            {children}
          </Wrapper>
        </>
      );
    }}
  />
);

export default Page;