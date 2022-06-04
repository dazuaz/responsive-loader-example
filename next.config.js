const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  images: {
    disableStaticImages: true
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(jpe?g|png)$/i,
      use: [
        {
          loader: "responsive-loader",
          options: {
            adapter: require("responsive-loader/sharp"),
            publicPath: "/_next",
            name: "static/media/[hash]-[width].[ext]",
          },
        },
      ],
      type: 'javascript/auto',
    });

    return config;
  },
});
