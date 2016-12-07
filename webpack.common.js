var webpack = require("webpack");
var nsWebpack = require("nativescript-dev-webpack");
var path = require("path");
var CopyWebpackPlugin = require("copy-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");
var AotPlugin = require('@ngtools/webpack').AotPlugin;

var nativescriptTarget = require('nativescript-dev-webpack/nativescript-target');

module.exports = function (platform, destinationApp) {
    if (!destinationApp) {
        //Default destination inside platforms/<platform>/...
        destinationApp = nsWebpack.getAppPath(platform);
    }
    var entry = {};
    //Discover entry module from package.json
    entry.bundle = "./" + nsWebpack.getEntryModule();
    //Vendor entry with third party libraries.
    entry.vendor = "./vendor";
    //app.css bundle
    entry["app.css"] = "./app.css";

    return {
        context: path.resolve("./app"),
        target: nativescriptTarget,
        entry: entry,
        output: {
            pathinfo: true,
            path: path.resolve(destinationApp),
            libraryTarget: "commonjs2",
            filename: "[name].js",
        },
        resolve: {
            //Resolve platform-specific modules like module.android.js
            extensions: [
                ".aot.ts",
                ".ts",
                ".js",
                ".css",
                "." + platform + ".ts",
                "." + platform + ".js",
                "." + platform + ".css",
            ],
            //Resolve {N} system modules from tns-core-modules
            modules: [
                "node_modules/tns-core-modules",
                "node_modules"
            ]
        },
        resolveLoader: {
            alias: {
                "raw": path.join(__dirname, "node_modules/raw-loader"),
            }
        },
        node: {
            //Disable node shims that conflict with NativeScript
            "http": false,
            "timers": false,
            "setImmediate": false,
        },
        module: {
            loaders: [
                {
                    test: /\.html$/,
                    loader: "raw"
                },
                // Root app.css file gets extracted with bundled dependencies
                {
                    test: /app\.css$/,
                    loader: ExtractTextPlugin.extract([
                        "resolve-url-loader",
                        "css-loader",
                        "nativescript-dev-webpack/platform-css-loader",
                    ]),
                },
                // Other CSS files get bundled using the raw loader
                {
                    test: /\.css$/,
                    exclude: /app\.css$/,
                    loaders: [
                        "raw",
                    ]
                },
                // Compile TypeScript files with ahead-of-time compiler.
                {
                    test: /\.ts$/,
                    loaders: [
                        '@ngtools/webpack',
                        'nativescript-dev-webpack/tns-aot-loader'
                    ]
                },
                // SASS support
                {
                    test: /\.scss$/,
                    loaders: [
                        "raw",
                        "resolve-url-loader",
                        "sass-loader"
                    ]
                },
            ]
        },
        plugins: [
            new ExtractTextPlugin("app.css"),
            //Vendor libs go to the vendor.js chunk
            new webpack.optimize.CommonsChunkPlugin({
                name: ["vendor"]
            }),
            //Define useful constants like TNS_WEBPACK
            new webpack.DefinePlugin({
                global: "global",
                __dirname: "__dirname",
                "global.TNS_WEBPACK": "true",
            }),
            //Copy assets to out dir. Add your own globs as needed.
            new CopyWebpackPlugin([
                { from: "app.css" },
                { from: "css/**" },
                { from: "**/*.jpg" },
                { from: "**/*.png" },
                { from: "**/*.xml" },
            ], { ignore: ["App_Resources/**"] }),
            //Generate a bundle starter script and activate it in package.json
            new nsWebpack.GenerateBundleStarterPlugin([
                "./vendor",
                "./bundle",
            ]),
            //Angular AOT compiler
            new AotPlugin({
                tsConfigPath: 'tsconfig.aot.json',
                entryModule: 'app/app.module#AppModule',
                typeChecking: false
            })
        ],
    };
};
