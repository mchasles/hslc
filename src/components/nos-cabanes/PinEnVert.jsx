import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import {
  Section,
  BgImg,
  LogoImg,
  ContentLeft,
  Description,
  BookCabinButton,
} from './layout';
import PinEnVertPhotos from './PinEnVertPhotos';

import pinEnvert from '../../images/nos-cabanes/logo-pin_en_vert.jpg';

const PinEnVert = () => {
  const data = useStaticQuery(query);
  const bgImg = data?.bgImg.childImageSharp.fluid;
  const html = data.allMarkdownRemark.edges[0]?.node.html;

  return (
    <Section id="pin-en-vert">
      <ContentLeft>
        <Description dangerouslySetInnerHTML={{ __html: html }} />
        <BookCabinButton />
        <PinEnVertPhotos />
        <LogoImg src={pinEnvert} alt="Pin en vert" />
      </ContentLeft>
      <BgImg fluid={bgImg} objectFit="contain" loading="eager" />
    </Section>
  );
};

export default PinEnVert;

const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { slug: { eq: "/data/nos-cabanes/pin-en-vert/" } } }
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
    bgImg: file(relativePath: { eq: "images/nos-cabanes/pin_en_vert.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
