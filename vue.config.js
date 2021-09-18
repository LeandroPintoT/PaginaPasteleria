const path = require('path');

module.exports = {
    devServer: {
        port:8082
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@c': path.resolve(__dirname, 'src/components'),
                '@a': path.resolve(__dirname, 'src/assets')
            },
        },
    }
}