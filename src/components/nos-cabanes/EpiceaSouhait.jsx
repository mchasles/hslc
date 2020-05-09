import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Cabin from '../Cabin';
import { getCabinData } from '../../utils/data';

const EpiceaSouhait = () => {
  const data = useStaticQuery(query);
  const { html, img, logo, photos } = getCabinData(data);

  return (
    <Cabin
      id="epicea-souhait"
      title="Epicéa Souhait"
      html={html}
      img={img}
      logo={logo}
      photos={photos}
    />
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
