import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import styled, { createGlobalStyle } from 'styled-components';

import Menu from './Menu';

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

  table {
    border-spacing: 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
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
  }
`;

const Page = ({ children }) => (
  <StaticQuery
    query={query}
    render={data => {
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
            <Menu />
            {children}
          </Wrapper>
        </>
      );
    }}
  />
);

export default Page;
