import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import {
  SectionRight,
  BgImg,
  LogoImg,
  ContentRight,
  Description,
  BookCabinButton,
  Thumbnails,
  Thumbnail,
} from './layout';

import houxBlond from '../../images/nos-cabanes/logo-houx_blond.jpg';

const HouxBlond = () => {
  const data = useStaticQuery(query);
  const bgImg = data?.bgImg.childImageSharp.fluid;
  const html = data.allMarkdownRemark.edges[0]?.node.html;

  return (
    <SectionRight id="houx-blond">
      <ContentRight>
        <Description dangerouslySetInnerHTML={{ __html: html }} />
        <BookCabinButton />
        <Thumbnails>
          <Thumbnail fluid={bgImg} loading="eager" />
          <Thumbnail fluid={bgImg} loading="eager" />
          <Thumbnail fluid={bgImg} loading="eager" />
        </Thumbnails>
        <LogoImg src={houxBlond} alt="Houx Blond" />
      </ContentRight>
      <BgImg fluid={bgImg} objectFit="contain" loading="eager" />
    </SectionRight>
  );
};

export default HouxBlond;

const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { slug: { eq: "/data/nos-cabanes/houx-blond/" } } }
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
    bgImg: file(relativePath: { eq: "images/nos-cabanes/houx_blond.png" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
