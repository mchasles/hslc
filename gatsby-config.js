/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require('path');

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
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images'),
      },
    },
    'gatsby-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-custom-blocks',
            options: {
              blocks: {
                logos: {
                  classes: 'logos',
                },
              },
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
              backgroundColor: 'transparent',
              boxShadow: 'none',
            },
          },
        ],
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        // Add any options here
      },
    },
  ],
};
