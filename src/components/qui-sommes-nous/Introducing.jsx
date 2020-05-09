import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { device } from '../../utils/media';
import Section from '../Section';
import { getHtmlData } from '../../utils/data';

const SectionIntroducing = styled(Section)`
  @media ${device.laptop} {
    & > h1 + p {
      position: absolute;
      left: 0;
      width: 38%;
      margin: 0;
    }

    p {
      margin-left: 42%;
    }
  }
`;

const Introducing = () => {
  const data = useStaticQuery(query);
  const html = getHtmlData(data);

  return (
    <SectionIntroducing
      id="presentation"
      dangerouslySetInnerHTML={{ __html: html }}
    />
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
      ...HtmlContent
    }
  }
`;
