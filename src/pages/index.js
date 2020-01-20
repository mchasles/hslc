import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import styled, { createGlobalStyle } from 'styled-components';

import Menu from '../components/menu';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    overflow-x: hidden;
    background-color: #e6e6e6;
  }

  nav, ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

const Wrapper = styled.section`
  background: papayawhip;
`;

export default ({ data }) => {
  const titles = data.allMarkdownRemark.edges[0]?.node.headings;

  return (
    <>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <meta name="description" content={data.site.siteMetadata.description} />
        <meta name="keywords" content="" />
      </Helmet>
      <Wrapper>
        <GlobalStyle />
        <Menu>
          <Menu.item>
            {titles.map(({ value }) => (
              <Menu.link>{value}</Menu.link>
            ))}
          </Menu.item>
        </Menu>
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
  }
`;
