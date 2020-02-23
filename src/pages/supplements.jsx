import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import { pageWrapper, tableStyles, paragraphStyles } from '../utils/styles';

import Page from '../components/Page';
import SectionBgImages from '../components/SectionBgImages';

const Wrapper = styled.div`
  ${pageWrapper};
  ${tableStyles};
  ${paragraphStyles};
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
