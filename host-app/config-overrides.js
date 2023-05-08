const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = function override(config) {
  return merge(config, {
    output: {
      uniqueName: "host-app",
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "host-app",
      }),
    ],
  });
};
