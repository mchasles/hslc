import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { Thumbnails, Thumbnail } from './layout';

const EpiceaSouhaitPhotos = () => {
  const data = useStaticQuery(query);
  const photos = data.photos.edges;

  return (
    <Thumbnails>
      {photos.map(({ node: { name, childImageSharp: { fluid } } }) => (
        <Thumbnail key={name} fluid={fluid} loading="eager" />
      ))}
    </Thumbnails>
  );
};

export default EpiceaSouhaitPhotos;

export const query = graphql`
  query {
    photos: allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
        absolutePath: { regex: "/images/nos-cabanes/photos/epicea-souhait/" }
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
