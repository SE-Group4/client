const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "production",
    entry: "./src/scripts/js/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 3000,
        open: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "StudyBuddy",
            filename: "./src/pages/index.html",
            inject: "head",
            scriptLoading: "defer",
        }),
    ],
};
