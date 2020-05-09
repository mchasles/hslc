import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import { device } from '../../utils/media';
import Section from '../Section';
import { getHtmlData } from '../../utils/data';

const Wrapper = styled(Section)`
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

      width: 47%;
      margin: 0 0 32px auto;

      & + table {
        margin: 0 auto 24px 6%;
        & + p + h3 + table {
          width: 56%;
          & + table {
            width: 38%;
          }
        }
      }
    }
  }

  h3 {
    clear: both;
    text-align: center;
    margin: 12px 0;
  }

  p {
    @media ${device.tablet} {
      clear: both;
    }
  }
`;

const Meal = () => {
  const data = useStaticQuery(query);
  const html = getHtmlData(data);

  return <Wrapper id="repas" dangerouslySetInnerHTML={{ __html: html }} />;
};

export default Meal;

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { slug: { eq: "/data/infos-pratiques/repas/" } } }
    ) {
      ...HtmlContent
    }
  }
`;
