const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { dependencies } = require("./package.json");

module.exports = function override(config) {
  return merge(config, {
    output: {
      uniqueName: "host_app",
      publicPath: "http://localhost:3000/",
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "host_app",
        remotes: {
          remote_app_1: "remote_app_1@http://localhost:3001/remoteEntry.js",
          remote_app_2: "remote_app_2@http://localhost:3002/remoteEntry.js",
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
