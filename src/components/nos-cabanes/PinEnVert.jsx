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
import PinEnVertPhotos from './PinEnVertPhotos';

import pinEnvert from '../../images/nos-cabanes/logo-pin_en_vert.jpg';

const PinEnVert = () => {
  const data = useStaticQuery(query);
  const { html, img } = getCabinData(data);

  return (
    <Section id="pin-en-vert">
      <Content>
        <Description dangerouslySetInnerHTML={{ __html: html }} />
        <BookCabinButton />
        <PinEnVertPhotos />
        <LogoImg src={pinEnvert} alt="Pin en vert" />
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
    bgImg: file(relativePath: { eq: "images/nos-cabanes/pin_en_vert.jpg" }) {
      ...CabinImage
    }
  }
`;
