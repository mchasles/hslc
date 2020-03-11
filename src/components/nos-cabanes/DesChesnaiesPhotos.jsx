import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Photos from './Photos';

const DesChesnaiesPhotos = () => {
  const data = useStaticQuery(query);

  return <Photos photos={data.photos.edges} />;
};

export default DesChesnaiesPhotos;

export const query = graphql`
  query {
    photos: allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
        absolutePath: { regex: "/images/nos-cabanes/photos/des-chesnaies/" }
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
