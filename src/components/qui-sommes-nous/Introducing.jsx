import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Section from '../Section';

const Introducing = () => {
  const data = useStaticQuery(query);
  const html = data.allMarkdownRemark.edges[0]?.node.html;

  return (
    <Section id="presentation" dangerouslySetInnerHTML={{ __html: html }} />
  );
};

export default Introducing;

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: {
        fields: { slug: { eq: "/data/qui-sommes-nous/presentation/" } }
      }
    ) {
      edges {
        node {
          html
        }
      }
    }
  }
`;
