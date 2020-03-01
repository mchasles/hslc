import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import Section from '../Section';

const Wrapper = styled(Section)`
  th + th,
  td + td {
    text-align: center;
  }
`;

const Prices = () => {
  const data = useStaticQuery(query);
  const html = data.allMarkdownRemark.edges[0]?.node.html;

  return <Wrapper id="tarifs" dangerouslySetInnerHTML={{ __html: html }} />;
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
