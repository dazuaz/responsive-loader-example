// next.config.js
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

module.exports = withPlugins([
  [
    optimizedImages,
    {
      responsive: {
        adapter: require("responsive-loader/sharp"),
      },
      /* config for next-optimized-images */
    },
  ],

  // your other plugins here
]);
