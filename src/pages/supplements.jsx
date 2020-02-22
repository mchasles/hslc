import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import { device } from '../utils/media';

import Page from '../components/Page';
import SectionBgImages from '../components/SectionBgImages';

const Wrapper = styled.div`
  margin: auto;

  @media ${device.tablet} {
    max-width: 60%;
  }

  table {
    width: 100%;
    margin: auto;

    @media ${device.tablet} {
    }
  }
  thead {
    color: white;
    text-align: left;
    background-color: rgba(165, 188, 84, 0.8);
  }

  th,
  td {
    padding: 8px;
  }

  td {
    color: rgb(117, 117, 117);
    background-color: rgba(255, 255, 255, 0.4);
  }

  p {
    margin: 16px 8px;
    color: rgb(97, 97, 97);

    @media ${device.tablet} {
    }
  }
`;

const Extras = ({ data }) => {
  const html = data.allMarkdownRemark.edges[0]?.node.html;

  return (
    <Page>
      <SectionBgImages>
        <Wrapper dangerouslySetInnerHTML={{ __html: html }} />
      </SectionBgImages>
    </Page>
  );
};

export default Extras;

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { slug: { eq: "/data/infos-pratiques/supplements/" } } }
    ) {
      edges {
        node {
          html
        }
      }
    }
  }
`;
