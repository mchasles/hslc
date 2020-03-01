import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import { device } from '../../utils/media';
import Section from '../Section';

const Wrapper = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;

  .gatsby-resp-image-wrapper {
    width: 60px;
    margin-bottom: 8px;

    @media ${device.tablet} {
      width: 80px;
      margin-bottom: 16px;
    }
  }

  h1 {
    width: 100%;
    padding-top: 64px;

    @media ${device.tablet} {
      padding-top: 96px;
    }
  }

  p {
    margin: 0;
    line-height: 18px;
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
