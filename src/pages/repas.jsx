import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import { device } from '../utils/media';
import { pageWrapper, tableStyles, paragraphStyles } from '../utils/styles';

import Page from '../components/Page';
import SectionBgImages from '../components/SectionBgImages';

const Wrapper = styled.div`
  ${pageWrapper};
  ${tableStyles};
  ${paragraphStyles};

  table {
    margin-right: 0 0 16px 0;

    & + table {
      margin-top: 16px;
    }
    th,
    td {
      text-align: center;
    }

    @media ${device.tablet} {
      float: left;

      width: 56%;
      margin: 0 0 32px auto;

      & + table {
        width: 38%;
        margin: 0 auto 0 6%;
      }
    }
  }

  p {
    @media ${device.tablet} {
      clear: both;
    }
  }
`;

const Meal = ({ data }) => {
  const html = data.allMarkdownRemark.edges[0]?.node.html;

  return (
    <Page>
      <SectionBgImages>
        <Wrapper dangerouslySetInnerHTML={{ __html: html }} />
      </SectionBgImages>
    </Page>
  );
};

export default Meal;

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { slug: { eq: "/data/infos-pratiques/repas/" } } }
    ) {
      edges {
        node {
          html
        }
      }
    }
  }
`;
