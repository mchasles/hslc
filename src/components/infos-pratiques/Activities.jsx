import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import { getHtmlData } from '../../utils/data';
import Section from '../Section';

const SectionActivities = styled(Section)`
  padding-bottom: 64px;

  ul {
    padding-left: 16px;
  }

  li {
    list-style-type: disc;
    list-style-position: outside;
  }
`;

const Activities = () => {
  const data = useStaticQuery(query);
  const html = getHtmlData(data);

  return (
    <SectionActivities
      id="activites"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default Activities;

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { slug: { eq: "/data/infos-pratiques/activites/" } } }
    ) {
      ...HtmlContent
    }
  }
`;
