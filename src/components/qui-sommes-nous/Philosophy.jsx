import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { device } from '../../utils/media';
import Section from '../Section';
import { getHtmlData } from '../../utils/data';

const Wrapper = styled(Section)`
  display: flex;
  flex-wrap: wrap;

  .logos {
    flex-basis: 100%;
    @media ${device.mobileL} {
      flex-basis: 40%;
    }
  }

  h1,
  p {
    flex-basis: 100%;
  }
  ul {
    flex-basis: 100%;
    box-sizing: border-box;
    padding-left: 16px;
    @media ${device.mobileL} {
      flex-basis: 56%;
      margin-right: 4%;
    }
  }

  li {
    list-style-type: disc;
    list-style-position: outside;
  }
`;

const Philosophy = () => {
  const data = useStaticQuery(query);
  const html = getHtmlData(data);

  return (
    <Wrapper
      id="philosophie-des-cabanes"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default Philosophy;

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: {
        fields: {
          slug: { eq: "/data/qui-sommes-nous/philosophie-des-cabanes/" }
        }
      }
    ) {
      ...HtmlContent
    }
  }
`;
