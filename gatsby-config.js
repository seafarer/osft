module.exports = {
  siteMetadata: {
    siteUrl: "https://www.floorprice.wtf",
    title: "Floor price WTF | OpenSea Stats and Floor Tracker",
    description:
        "Can devs do something?",
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
      },
      __key: "images",
    },
  ],
};
