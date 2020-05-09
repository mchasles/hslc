import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Page from '../components/Page';
import Section from '../components/Section';
import { getHtmlData } from '../utils/data';

const SectionContact = styled(Section)`
  display: flex;
  flex-wrap: wrap;

  h1 {
    width: 100%;
  }

  h1 + p {
    width: 40%;
    margin-right: 4%;
  }

  ul {
    width: 56%;
  }

  p {
    width: 100%;
  }
`;

export default ({ data }) => {
  const html = getHtmlData(data);

  return (
    <Page>
      <SectionContact id="contact" dangerouslySetInnerHTML={{ __html: html }} />
    </Page>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(filter: { fields: { slug: { eq: "/data/contact/" } } }) {
      ...HtmlContent
    }
  }
`;
