import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import Section from '../Section';
import { getHtmlData } from '../../utils/data';

const Wrapper = styled(Section)`
  th + th,
  td + td {
    text-align: center;
  }
`;

const Prices = () => {
  const data = useStaticQuery(query);
  const html = getHtmlData(data);

  return <Wrapper id="tarifs" dangerouslySetInnerHTML={{ __html: html }} />;
};

export default Prices;

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { slug: { eq: "/data/infos-pratiques/tarifs/" } } }
    ) {
      ...HtmlContent
    }
  }
`;
