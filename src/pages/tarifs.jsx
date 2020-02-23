import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import { pageWrapper, tableStyles, listStyles } from '../utils/styles';

import Page from '../components/Page';
import SectionBgImages from '../components/SectionBgImages';

const Wrapper = styled.div`
  ${pageWrapper};
  ${tableStyles};
  ${listStyles};
`;

const Prices = ({ data }) => {
  const html = data.allMarkdownRemark.edges[0]?.node.html;

  return (
    <Page>
      <SectionBgImages>
        <Wrapper dangerouslySetInnerHTML={{ __html: html }} />
      </SectionBgImages>
    </Page>
  );
};

export default Prices;

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { slug: { eq: "/data/infos-pratiques/tarifs/" } } }
    ) {
      edges {
        node {
          html
        }
      }
    }
  }
`;
