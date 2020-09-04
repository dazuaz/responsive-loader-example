module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.(jpe?g|png|webp)$/i,
      use: [
        {
          loader: "responsive-loader",
          options: {
            adapter: require("responsive-loader/sharp"),
            publicPath: "/_next/static/media",
            outputPath: "static/media",
            name: "[name][hash:7]-[width].[ext]",
            placeholder: true,
            placeholderSize: 20,
            quality: 60,
            esModule: true,
          },
        },
      ],
    });
    return config;
  },
};
