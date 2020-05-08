import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import Section from '../Section';

const SectionExtras = styled(Section)`
  .gatsby-resp-image-wrapper {
    float: left;
    width: 34%;
    margin: 0 24px 24px 0 !important;
  }

  p {
    clear: both;
  }

  table {
    margin-top: 16px;
  }
`;

const Extras = () => {
  const data = useStaticQuery(query);
  const html = data.allMarkdownRemark.edges[0]?.node.html;

  return (
    <SectionExtras
      id="supplements"
      dangerouslySetInnerHTML={{ __html: html }}
    />
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
