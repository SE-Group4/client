import { resolve, join } from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export const mode = "production";
export const entry = {
    main: "./src/scripts/js/index.js",
    interests: "./src/scripts/js/interest.js",
    signup: "./src/scripts/js/signup.js",
    signin: "./src/scripts/js/signin.js",
    profile: "./src/scripts/js/profile.js",
    // user-profile: "./src/scripts/js/user-profile.js",
    // open-chat: "./src/scripts/js/open-chat.js",
    // links: "./src/scripts/js/links.js",
};
export const output = {
    filename: "bundle.js",
    path: resolve(__dirname, "dist"),
};
export const devServer = {
    contentBase: join(__dirname, "dist"),
    port: 3000,
    open: true,
};
export const plugins = [
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
];
