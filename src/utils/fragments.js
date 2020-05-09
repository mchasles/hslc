import { graphql } from 'gatsby';

export const htmlMarkdownRemark = graphql`
  fragment HtmlContent on MarkdownRemarkConnection {
    edges {
      node {
        html
      }
    }
  }
`;

export const cabinContentFragment = graphql`
  fragment CabinContent on MarkdownRemarkConnection {
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
`;

export const cabinImageFragment = graphql`
  fragment CabinImage on File {
    childImageSharp {
      fluid(maxWidth: 2880, quality: 70) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const cabinLogoFragment = graphql`
  fragment CabinLogo on File {
    childImageSharp {
      fluid(maxWidth: 360) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const cabinPhotosFragment = graphql`
  fragment CabinPhotos on FileConnection {
    edges {
      node {
        name
        photo: childImageSharp {
          fluid(maxWidth: 1680, quality: 70) {
            ...GatsbyImageSharpFluid
          }
        }
        thumb: childImageSharp {
          fluid(maxWidth: 160, quality: 70) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;
