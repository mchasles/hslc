import Default from './index';

export default Default;

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { slug: { eq: "/data/panoramic/" } } }
    ) {
      edges {
        node {
          headings {
            value
            depth
          }
        }
      }
    }
    bgImg: file(relativePath: { eq: "images/accueil.png" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    logoImg: file(relativePath: { eq: "images/logo_white.png" }) {
      childImageSharp {
        fixed(width: 300) {
          src
          srcSet
          width
          height
        }
      }
    }
    panoramicImg: file(relativePath: { eq: "images/panoramic.png" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
