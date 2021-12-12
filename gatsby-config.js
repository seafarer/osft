module.exports = {
  siteMetadata: {
    siteUrl: "https://nifty-borg-c8fe62.netlify.app/",
    title: "OpenSea Stats and Floor Tracker",
    description:
        "Simple OpenSea Stats and Floor tracker.",
    author: "@cspacler",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
        icon: "./src/images/icon.png"
      },
      __key: "images",
    },
  ],
};
