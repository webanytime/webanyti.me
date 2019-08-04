// @ts-check

const playgroundHastPlugin = require("./src/utils/playgroundHastPlugin")

module.exports = {
  siteMetadata: {
    title: "Webanytime Limited",
    description: "web architecture and development solutions",
    author: "contact@webanyti.me",
    siteUrl: "https://webanyti.me",
  },
  plugins: [
    {
      resolve: "gatsby-mdx",
      options: {
        extensions: [".mdx", ".md"],

        // Default layouts are meta wrappers around .mdx pages. Can be useful to
        // share queries across different types of pages.
        defaultLayouts: {
          default: require.resolve("./src/layouts/DefaultLayout.tsx"),
        },

        // MDX AST transformers
        hastPlugins: [playgroundHastPlugin],

        // Imports here are available globally to .mdx files, with the exception
        // of automatically created pages located in /pages. This is a bug in
        // gatsby-mdx. See https://github.com/ChristopherBiscardi/gatsby-mdx/issues/243
        //
        // Also note: For mdx to work in NetlifyCMS, global scope passed in here
        // also be passed into `cms.js`, under the `scope` key.
        //
        globalScope: `
          import { UIComponents } from 'Theme'
          export default {
            ...UIComponents
          }
        `,

        // mdPlugins: [],
        // gatsbyRemarkPlugins: [{}],
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.jsx`,
        enableIdentityWidget: false,
        publicPath: "admin",
        htmlTitle: "Admin",
        manualInit: true,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/content/blog/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/content/pages/`,
      },
    },
    "gatsby-plugin-catch-links",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-typescript",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-netlify",
      options: {
        headers: {
          "/*": [
            "Strict-Transport-Security: max-age=31536000; includeSubDomains; preload",
          ],
        },
      },
    },
    "gatsby-plugin-sitemap",
  ],
}
