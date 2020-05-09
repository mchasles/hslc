export const getCabinData = data => ({
  img: data.img.childImageSharp.fluid,
  logo: data.logo.childImageSharp.fluid,
  html: data.allMarkdownRemark.edges[0]?.node.html,
  photos: data.photos.edges,
});

export const getHtmlData = data => data.allMarkdownRemark.edges[0]?.node.html;
