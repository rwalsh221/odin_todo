const path = require("path");

module.exports = {
    entry: {
        main: "./src/js/index.js"
    },
    plugins: [],
    module: {
        rules: [
            
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        publicPath: 'imgs/',
                        outputPath: "imgs"
                    }
                }
            }
        ]
    }

};