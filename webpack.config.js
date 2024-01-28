const { mergeWithRules } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const Dotenv = require("dotenv-webpack");

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "octosoft",
    projectName: "styleguide",
    webpackConfigEnv,
  });

  const config = mergeWithRules({
    module: {
      rules: {
        test: "match",
        use: "replace",
      },
    },
  })(defaultConfig, {
    // customize the webpack config here
    plugins: [
      new Dotenv(), // This will read the variables from the .env file
    ],
    resolve: {
      extensions: [".mjs", ".js", ".jsx", ".wasm", ".json", ".ts", ".tsx"],
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
            require.resolve("style-loader", {
              paths: [require.resolve("webpack-config-single-spa")],
            }),
            require.resolve("css-loader", {
              paths: [require.resolve("webpack-config-single-spa")],
            }),
            "postcss-loader",
          ],
        },
      ],
    },
  });

  return config;
};
