
const { injectBabelPlugin } = require('react-app-rewired');
const PATH = require('path')

function resolve(url) {
    return PATH.resolve(__dirname, 'src/', url)
}

module.exports = function override(config, env) {
    
    config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config);
   
    // 配置别名
    config.resolve.alias = {
        ...config.resolve.alias,
        '@': resolve(''),
        '@as': resolve('assets'),
        '@c': resolve('component'),
        '@pages': resolve('pages'),
        '@lib': resolve('lib'),
        '@connect': resolve('connect'),
        '@util' : resolve('util')
    }
    return config;
};