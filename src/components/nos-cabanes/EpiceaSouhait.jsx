import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import {
  SectionRight,
  BgImg,
  LogoImg,
  ContentRight,
  Description,
  BookCabinButton,
} from './layout';

import EpiceaSouhaitPhotos from './EpiceaSouhaitPhotos';
import epiceaSouhait from '../../images/nos-cabanes/logo-epicea_souhait.jpg';

const EpiceaSouhait = () => {
  const data = useStaticQuery(query);
  const bgImg = data?.bgImg.childImageSharp.fluid;
  const html = data.allMarkdownRemark.edges[0]?.node.html;

  return (
    <SectionRight id="epicea-souhait">
      <ContentRight>
        <Description dangerouslySetInnerHTML={{ __html: html }} />
        <BookCabinButton />
        <EpiceaSouhaitPhotos />
        <LogoImg src={epiceaSouhait} alt="Pin en vert" />
      </ContentRight>
      <BgImg fluid={bgImg} objectFit="contain" loading="eager" />
    </SectionRight>
  );
};

export default EpiceaSouhait;

const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { slug: { eq: "/data/nos-cabanes/epicea-souhait/" } } }
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
    bgImg: file(relativePath: { eq: "images/nos-cabanes/epicea_souhait.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
