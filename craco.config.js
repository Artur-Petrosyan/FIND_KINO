const path = require('path')

const resolvePath = (p) => path.resolve(__dirname,p)

module.exports = {
    webpack : {
        port : '3000',
        alias : {
            src : resolvePath('./src')
        }
    }
}