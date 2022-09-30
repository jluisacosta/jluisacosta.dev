const path = require('path')
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    assetPrefix: isProd ? '/jluisacosta/' : '',
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    optimizeFonts: false,
    distDir: 'build',
}
