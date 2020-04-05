export const getCabinData = data => ({
  img: data.img.childImageSharp.fluid,
  logo: data.logo.childImageSharp.fluid,
  html: data.allMarkdownRemark.edges[0]?.node.html,
});
