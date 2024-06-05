# Quasar App

> WIP

Add below packages to "package.json" file's "devDependencies" object.
    "postcss": "^7.0.34",
    "postcss-import": "^12.0.1",
    "postcss-loader": "^4.0.2",
    "postcss-preset-env": "^6.7.0",
    "postcss-url": "^9.0.0"

Run "npm install" to install new packages

Add ".postcssrc.js" file to the root directory of the project and add below content
module.exports = {
    sourceMap: true,
    postcssOptions: {
        plugins: [
            require('postcss-import'),
            require('postcss-url'),
            require('postcss-preset-env')({
                stage: 1,
                browsers: ['last 2 versions', '> 1%']
            }),
            require('autoprefixer')({
                overrideBrowserslist: ['last 2 versions', '> 1%']
            })
        ]
    }
}

Add "logo.png" file to "src/assets/images" directory

Comment out line 2 and 6 in "src/lib/helpers.js" file
