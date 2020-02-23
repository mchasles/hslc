import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Section from './Section';

const Extras = () => {
  const data = useStaticQuery(query);
  const html = data.allMarkdownRemark.edges[0]?.node.html;

  return (
    <Section id="supplements" dangerouslySetInnerHTML={{ __html: html }} />
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
