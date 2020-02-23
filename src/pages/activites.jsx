import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import {
  pageWrapper,
  headingsStyles,
  paragraphStyles,
  listStyles,
  linkStyles,
} from '../utils/styles';

import Page from '../components/Page';
import SectionBgImages from '../components/SectionBgImages';

const Wrapper = styled.div`
  ${pageWrapper};
  ${headingsStyles};
  ${paragraphStyles};
  ${listStyles};
  ${linkStyles};

  ul {
    padding-left: 16px;
  }

  li {
    list-style-type: disc;
    list-style-position: outside;
  }
`;

const Activities = ({ data }) => {
  const html = data.allMarkdownRemark.edges[0]?.node.html;

  return (
    <Page>
      <SectionBgImages>
        <Wrapper dangerouslySetInnerHTML={{ __html: html }} />
      </SectionBgImages>
    </Page>
  );
};

export default Activities;

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { slug: { eq: "/data/infos-pratiques/activites/" } } }
    ) {
      edges {
        node {
          html
        }
      }
    }
  }
`;
