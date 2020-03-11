import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Photos from './Photos';

const HouxBlondPhotos = () => {
  const data = useStaticQuery(query);

  return <Photos photos={data.photos.edges} />;
};

export default HouxBlondPhotos;

export const query = graphql`
  query {
    photos: allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
        absolutePath: { regex: "/images/nos-cabanes/photos/houx-blond/" }
      }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 1920, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
