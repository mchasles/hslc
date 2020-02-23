import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import { device } from '../utils/media';
import { pageWrapper } from '../utils/styles';

import Page from '../components/Page';
import SectionBgImages from '../components/SectionBgImages';

const Wrapper = styled.div`
  ${pageWrapper};
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

  p {
    margin: 0 0 20px 0;
    line-height: 20px;
    text-align: center;
    color: rgb(117, 117, 117);
    font-style: italic;
  }
`;

const ToKnowBeforeComing = ({ data }) => {
  const html = data.allMarkdownRemark.edges[0]?.node.html;

  return (
    <Page>
      <SectionBgImages>
        <Wrapper dangerouslySetInnerHTML={{ __html: html }} />
      </SectionBgImages>
    </Page>
  );
};

export default ToKnowBeforeComing;

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
