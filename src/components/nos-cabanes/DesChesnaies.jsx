import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import {
  Section,
  BgImg,
  LogoImg,
  ContentLeft,
  Description,
  Thumbnails,
  Thumbnail,
} from './layout';

import pinEnvert from '../../images/nos-cabanes/logo-des_chesnaies.jpg';

const SectionMarginBottom = styled(Section)`
  padding-bottom: 128px;
`;

const DesChesnaies = () => {
  const data = useStaticQuery(query);
  const bgImg = data?.bgImg.childImageSharp.fluid;
  const html = data.allMarkdownRemark.edges[0]?.node.html;

  return (
    <SectionMarginBottom id="des-chesnaies">
      <ContentLeft>
        <Description dangerouslySetInnerHTML={{ __html: html }} />
        <Thumbnails>
          <Thumbnail fluid={bgImg} loading="eager" />
          <Thumbnail fluid={bgImg} loading="eager" />
          <Thumbnail fluid={bgImg} loading="eager" />
        </Thumbnails>
        <LogoImg src={pinEnvert} alt="Des Chesnaies" />
      </ContentLeft>
      <BgImg fluid={bgImg} objectFit="contain" loading="eager" />
    </SectionMarginBottom>
  );
};

export default DesChesnaies;

const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { slug: { eq: "/data/nos-cabanes/des-chesnaies/" } } }
    ) {
      edges {
        node {
          headings {
            value
            depth
          }
          html
        }
      }
    }
    bgImg: file(relativePath: { eq: "images/nos-cabanes/des_chesnaies.png" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
