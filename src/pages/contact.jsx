import React from 'react';
import { graphql } from 'gatsby';

import Page from '../components/Page';
import Section from '../components/Section';

export default ({ data }) => {
  const html = data.allMarkdownRemark.edges[0]?.node.html;

  return (
    <Page>
      <Section id="contact" dangerouslySetInnerHTML={{ __html: html }} />;
    </Page>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(filter: { fields: { slug: { eq: "/data/contact/" } } }) {
      edges {
        node {
          html
        }
      }
    }
  }
`;
