const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { dependencies } = require("./package.json");

module.exports = function override(config) {
  return merge(config, {
    output: {
      uniqueName: "remote_app_2",
      publicPath: "http://localhost:3002/",
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "remote_app_2",
        filename: "remoteEntry.js",
        exposes: {
          "./App": "./src/bootstrap/app",
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
