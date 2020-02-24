import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import Section from './Section';

const Wrapper = styled(Section)`
  padding-bottom: 64px;

  ul {
    padding-left: 16px;
  }

  li {
    list-style-type: disc;
    list-style-position: outside;
  }
`;

const Contact = () => {
  const data = useStaticQuery(query);
  const html = data.allMarkdownRemark.edges[0]?.node.html;

  return <Wrapper id="contact" dangerouslySetInnerHTML={{ __html: html }} />;
};

export default Contact;

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
