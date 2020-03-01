import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import Section from '../Section';

const Wrapper = styled(Section)`
  ul {
    padding-left: 16px;
  }

  li {
    list-style-type: disc;
    list-style-position: outside;
  }
`;

const Philosophy = () => {
  const data = useStaticQuery(query);
  const html = data.allMarkdownRemark.edges[0]?.node.html;

  return (
    <Wrapper
      id="philosophie-des-cabanes"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default Philosophy;

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: {
        fields: {
          slug: { eq: "/data/qui-sommes-nous/philosophie-des-cabanes/" }
        }
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
