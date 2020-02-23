import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import { device } from '../utils/media';
import Section from './Section';

const Wrapper = styled(Section)`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .gatsby-resp-image-wrapper {
    width: 60px;
    margin-bottom: 10px;

    @media ${device.tablet} {
      width: 80px;
      margin-bottom: 20px;
    }
  }

  h1 {
    width: 100%;
  }

  p {
    margin: 0 0 20px 0;
    line-height: 20px;
    text-align: center;
    color: rgb(117, 117, 117);
    font-style: italic;
  }
`;

const ToKnow = () => {
  const data = useStaticQuery(query);
  const html = data.allMarkdownRemark.edges[0]?.node.html;

  return (
    <Wrapper
      id="a-savoir-avant-votre-sejour"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default ToKnow;

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: {
        fields: {
          slug: { eq: "/data/infos-pratiques/a-savoir-avant-votre-sejour/" }
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
