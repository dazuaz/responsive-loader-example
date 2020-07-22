const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

module.exports = withBundleAnalyzer({
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(jpe?g|png)$/i,
      use: [
        {
          loader: "responsive-images-loader",
          options: {
            adapter: require("responsive-images-loader/sharp"),
            publicPath: "/_next",
            name: "static/media/[hash]-[width].[ext]",
          },
        },
      ],
    })

    return config
  },
})
