const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { dependencies } = require("./package.json");

module.exports = function override(config) {
  return merge(config, {
    output: {
      uniqueName: "host_app",
      publicPath: process.env.PUBLIC_PATH,
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "host_app",
        remotes: {
          remote_app_1: process.env.REMOTE_APP_1,
          remote_app_2: process.env.REMOTE_APP_2,
        },
        shared: {
          ...dependencies,
          react: {
            singleton: true,
            requiredVersion: dependencies["react"],
          },
          "react-dom": {
            singleton: true,
            requiredVersion: dependencies["react-dom"],
          },
        },
      }),
    ],
  });
};
