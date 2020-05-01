import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import styled, { createGlobalStyle } from 'styled-components';

import Menu from './Menu';

import fontFiles from '../fonts';
import desChesnaies from '../images/nos-cabanes/logo-des_chesnaies.jpg';
import epicea from '../images/nos-cabanes/logo-epicea_souhait.jpg';
import houxBlond from '../images/nos-cabanes/logo-houx_blond.jpg';
import pinEnvert from '../images/nos-cabanes/logo-pin_en_vert.jpg';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Shopie';
    font-style: normal;
    font-weight: normal;
    src: local('Shopie'), url(${fontFiles.Shopie}) format('woff'), url(${fontFiles.Shopie2}) format('woff2');
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
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  overflow-y: scroll;
  scroll-behavior: smooth;
  padding-bottom: ${({ marginBottom }) => (marginBottom ? '128px' : '0')};
`;

const BgImg = styled.img`
  position: absolute;
  width: 12vw;
  min-width: 100px;
`;

const Epicea = styled(BgImg)`
  right: 10vw;
  top: 8vh;
`;

const HouxBlond = styled(BgImg)`
  right: 6vw;
  top: 58vh;
`;

const PinEnvert = styled(BgImg)`
  left: 8vw;
  top: 20vh;
`;

const DesChesnaies = styled(BgImg)`
  left: 6vw;
  top: 66vh;
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

const Page = ({ children, bgImgs = true, marginBottom = false }) => (
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
          <Wrapper id="main" marginBottom={marginBottom}>
            <GlobalStyle />
            <Menu />
            {children}
            {bgImgs && (
              <>
                <DesChesnaies src={desChesnaies} alt="Des Chesnaies" />
                <Epicea src={epicea} alt="Epicea" />
                <HouxBlond src={houxBlond} alt="Houx blond" />
                <PinEnvert src={pinEnvert} alt="Pin en vert" />
              </>
            )}
          </Wrapper>
        </>
      );
    }}
  />
);

export default Page;
