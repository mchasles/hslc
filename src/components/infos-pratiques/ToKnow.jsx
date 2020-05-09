import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import { device } from '../../utils/media';
import Section from '../Section';
import pinecone from '../../images/nos-cabanes/logo-pin_en_vert.jpg';
import { getHtmlData } from '../../utils/data';

const Wrapper = styled(Section)`
  position: relative;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  li {
    padding-bottom: 24px;

    text-align: center;
  }

  @media ${device.tablet} {
    ul {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      justify-content: start;
    }
    li {
      flex-basis: 33.333%;
      padding: 0 24px 24px 24px;
      box-sizing: border-box;
      text-align: center;
    }
  }

  .gatsby-resp-image-wrapper {
    width: 60px;
    margin-bottom: 8px;

    @media ${device.tablet} {
      width: 80px;
    }
  }

  h1 {
    width: 100%;
    padding-top: 64px;

    @media ${device.tablet} {
      padding-top: 96px;
    }
  }

  em {
    display: block;
    font-size: 1.2em;
    font-weight: bold;
    font-style: normal;
    color: rgb(165, 188, 84);
    margin-bottom: 0.8em;
  }

  p {
    margin: 0;
    line-height: 18px;
    text-align: center;
    color: rgb(60, 50, 40);
    font-style: italic;
  }
`;

const Pinecone = styled.img`
  display: none;
  @media ${device.tablet} {
    display: block;
    position: absolute;
    right: 4%;
    top: 60%;
    width: 24%;
  }
`;

const ToKnow = () => {
  const data = useStaticQuery(query);
  const html = getHtmlData(data);

  return (
    <Wrapper>
      <Content
        id="a-savoir-avant-votre-sejour"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <Pinecone src={pinecone} alt="Pomme de pain" />
    </Wrapper>
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
      ...HtmlContent
    }
  }
`;
