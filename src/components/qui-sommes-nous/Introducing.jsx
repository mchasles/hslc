import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { device } from '../../utils/media';
import Section from '../Section';

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
  const html = data.allMarkdownRemark.edges[0]?.node.html;

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
      edges {
        node {
          html
        }
      }
    }
  }
`;
