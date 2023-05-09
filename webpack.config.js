const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "production",
    entry: {
        main: "./src/scripts/js/index.js",
        interests: "./src/scripts/js/interest.js",
        signup: "./src/scripts/js/signup.js",
        signin: "./src/scripts/js/signin.js",
        profile: "./src/scripts/js/profile.js",
        user-profile: "./src/scripts/js/user-profile.js",
        open-chat: "./src/scripts/js/open-chat.js",
        links: "./src/scripts/js/links.js",
    },
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
            filename: 'index.html',
            template: './src/pages/index.html',
            chunks: ['main'],
            scriptLoading: "defer",
            chuncks: ["main"],
        }),
        new HtmlWebpackPlugin({
            filename: 'interests.html',
            template: './src/pages/interests.html',
            chunks: ['interests'],
        }),
        new HtmlWebpackPlugin({
            filename: 'open-chat.html',
            template: './src/pages/open-chat.html',
            chunks: ['open-chat'],
        }),
        new HtmlWebpackPlugin({
            filename: 'signin.html',
            template: './src/pages/signin.html',
            chunks: ['signin'],
        }),
        new HtmlWebpackPlugin({
            filename: 'signup.html',
            template: './src/pages/signup.html',
            chunks: ['signup'],
        })
    ],
};
