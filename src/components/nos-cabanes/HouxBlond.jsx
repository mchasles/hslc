import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Cabin from '../Cabin';
import { getCabinData } from '../../utils/data';

const HouxBlond = () => {
  const data = useStaticQuery(query);
  const { html, img, logo, photos } = getCabinData(data);

  return (
    <Cabin
      id="houx-blond"
      title="Houx Blond"
      html={html}
      img={img}
      logo={logo}
      photos={photos}
    />
  );
};

export default HouxBlond;

const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { slug: { eq: "/data/nos-cabanes/houx-blond/" } } }
    ) {
      ...CabinContent
    }
    img: file(relativePath: { eq: "images/nos-cabanes/houx_blond.jpg" }) {
      ...CabinImage
    }
    logo: file(relativePath: { eq: "images/nos-cabanes/logo-houx_blond.jpg" }) {
      ...CabinLogo
    }
    photos: allFile(
      filter: {
        extension: { regex: "/(jpg)|(jpeg)/" }
        absolutePath: { regex: "/images/nos-cabanes/photos/houx-blond/" }
      }
    ) {
      ...CabinPhotos
    }
  }
`;
