import React from 'react';
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

const DesChesnaies = () => {
  const data = useStaticQuery(query);
  const bgImg = data?.bgImg.childImageSharp.fluid;
  const html = data.allMarkdownRemark.edges[0]?.node.html;

  return (
    <Section>
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
    </Section>
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
