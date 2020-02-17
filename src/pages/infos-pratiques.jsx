import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import { device } from '../utils/media';

import Page from '../components/Page';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: 64px;

  @media ${device.tablet} {
    padding-top: 80px;
  }

  .gatsby-resp-image-wrapper {
    width: 80px;
    margin-bottom: 10px;

    @media ${device.tablet} {
      width: 140px;
      margin-bottom: 20px;
    }
  }

  p {
    margin: 0;

    text-align: center;
    color: rgb(117, 117, 117);
    font-style: italic;

    @media ${device.tablet} {
      max-width: 60%;
    }
  }
`;

const Infos = ({ data }) => {
  const html = data.allMarkdownRemark.edges[0]?.node.html;

  return (
    <Page>
      <Wrapper dangerouslySetInnerHTML={{ __html: html }} />
    </Page>
  );
};

export default Infos;

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: {
        fields: {
          slug: { eq: "/data/infos-pratiques/a-savoir-avant-de-venir/" }
        }
      }
    ) {
      edges {
        node {
          headings {
            value
            depth
          }
          html
        }
      }
    }
  }
`;
