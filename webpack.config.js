const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',  // Entry point for your application
    output: {
    filename: 'bundle.js',  // Output file name
    path: path.resolve(__dirname, 'dist'),  // Output directory
},
//     module: {
//     rules: [
//     {
//         test: /\.css$/,  // Rule for .css files
//         use: ['style-loader', 'css-loader'],  // Loaders to handle CSS
//     },
//     ],
// },
};
