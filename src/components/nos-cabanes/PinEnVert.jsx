import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { getCabinData } from '../../utils/cabin';

import {
  Section,
  BgImg,
  LogoImg,
  Content,
  Description,
  BookCabinButton,
} from './layout';

import Photos from './Photos';

const PinEnVert = () => {
  const data = useStaticQuery(query);
  const { html, img, logo, photos } = getCabinData(data);

  return (
    <Section id="pin-en-vert">
      <Content>
        <Description dangerouslySetInnerHTML={{ __html: html }} />
        <BookCabinButton />
        <Photos photos={photos} />
        <LogoImg fluid={logo} alt="Pin en vert" />
      </Content>
      <BgImg fluid={img} objectFit="contain" />
    </Section>
  );
};

export default PinEnVert;

const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { slug: { eq: "/data/nos-cabanes/pin-en-vert/" } } }
    ) {
      ...CabinContent
    }
    img: file(relativePath: { eq: "images/nos-cabanes/pin_en_vert.jpg" }) {
      ...CabinImage
    }
    logo: file(
      relativePath: { eq: "images/nos-cabanes/logo-pin_en_vert.jpg" }
    ) {
      ...CabinLogo
    }
    photos: allFile(
      filter: {
        extension: { regex: "/(jpg)|(jpeg)/" }
        absolutePath: { regex: "/images/nos-cabanes/photos/pin-en-vert/" }
      }
    ) {
      ...CabinPhotos
    }
  }
`;
