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