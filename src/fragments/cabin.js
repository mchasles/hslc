import { graphql } from 'gatsby';

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
      fluid(maxWidth: 2880) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
