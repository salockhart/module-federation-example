const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = function override(config) {
  return merge(config, {
    output: {
      uniqueName: "remote-app-2",
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "remote-app-2",
      }),
    ],
  });
};
