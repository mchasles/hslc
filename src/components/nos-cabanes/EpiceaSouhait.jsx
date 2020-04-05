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

const EpiceaSouhait = () => {
  const data = useStaticQuery(query);
  const { html, img, logo, photos } = getCabinData(data);

  return (
    <Section id="epicea-souhait" reverse>
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

export default EpiceaSouhait;

const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { slug: { eq: "/data/nos-cabanes/epicea-souhait/" } } }
    ) {
      ...CabinContent
    }
    img: file(relativePath: { eq: "images/nos-cabanes/epicea_souhait.jpg" }) {
      ...CabinImage
    }
    logo: file(
      relativePath: { eq: "images/nos-cabanes/logo-epicea_souhait.jpg" }
    ) {
      ...CabinLogo
    }
    photos: allFile(
      filter: {
        extension: { regex: "/(jpg)|(jpeg)/" }
        absolutePath: { regex: "/images/nos-cabanes/photos/epicea-souhait/" }
      }
    ) {
      ...CabinPhotos
    }
  }
`;
