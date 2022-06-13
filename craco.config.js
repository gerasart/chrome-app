const { ProvidePlugin } = require("webpack");
module.exports = {
    webpack: {
        configure: (webpackConfig, { env, paths }) => {
            return {
                ...webpackConfig,
                entry: {
                    main: [
                        env === "development" &&
                            require.resolve(
                                "react-dev-utils/webpackHotDevClient"
                            ),
                        paths.appIndexJs,
                    ].filter(Boolean),
                    background: "./src/chrome/background.js",
                },
                output: {
                    ...webpackConfig.output,
                    filename: "[name].js",
                },
                optimization: {
                    ...webpackConfig.optimization,
                    runtimeChunk: false,
                },
                resolve: {
                    fallback: {
                        crypto: require.resolve("crypto-browserify"),
                        stream: require.resolve("stream-browserify"),
                        assert: require.resolve("assert"),
                        http: require.resolve("stream-http"),
                        https: require.resolve("https-browserify"),
                        os: require.resolve("os-browserify"),
                        url: require.resolve("url"),
                    },
                },
                plugins: [
                    ...webpackConfig.plugins,
                    new ProvidePlugin({
                        Buffer: ["buffer", "Buffer"],
                    }),
                    new ProvidePlugin({
                        process: "process/browser",
                    }),
                ],
            };
        },
    },
};
