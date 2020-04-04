export const getCabinData = data => ({
  img: data?.bgImg.childImageSharp.fluid,
  html: data.allMarkdownRemark.edges[0]?.node.html,
});
