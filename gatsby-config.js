/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title:
      'Hêtre sous le Charme - Cabanes perchées dans les arbres en Corrèze surplombant la Dordogne',
    description:
      'Hêtre sous le Charme - Cabanes perchées dans les arbres en Corrèze surplombant la Dordogne',
    keywords:
      'Hetre sous le charme, Cabanes, perchees, arbres, Correze, Dordogne, hetresouslecharme.com, location, cabane, arbre, Le Bourg, Saint Martial, Entraygues, vacances, nature.',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        // Add any options here
      },
    },
  ],
};
