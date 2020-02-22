import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import { device } from '../utils/media';

import Page from '../components/Page';
import SectionBgImages from '../components/SectionBgImages';

const Wrapper = styled.div`
  margin: auto;

  @media ${device.tablet} {
    max-width: 60%;
  }

  table {
    width: 100%;
    margin: 0 0 16px 0;

    & + table {
      margin-top: 16px;
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
  thead {
    color: white;
    text-align: left;
    background-color: rgba(165, 188, 84, 0.8);
  }

  th,
  td {
    padding: 8px;
    text-align: center;
  }

  td {
    color: rgb(117, 117, 117);
    background-color: rgba(255, 255, 255, 0.4);
  }

  p {
    margin: 16px 8px;
    color: rgb(97, 97, 97);

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
