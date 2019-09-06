const isProduction = process.env.NODE_ENV === 'production'
const CompressionWebpackPlugin = require('compression-webpack-plugin')

const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const path = require('path')
const merge = require('lodash.merge')

const TARGET_NODE = process.env.WEBPACK_TARGET === 'node'
const target = TARGET_NODE ? 'server' : 'client'

const resolve = dir => path.join(__dirname, dir)
const plugins = [
  TARGET_NODE ? new VueSSRServerPlugin() : new VueSSRClientPlugin()
]
module.exports = {
  configureWebpack: config => {
    let plugins = [
      TARGET_NODE ? new VueSSRServerPlugin() : new VueSSRClientPlugin()
    ]
    if (isProduction) {
      config.plugins.push(
        new CompressionWebpackPlugin({
          // 正在匹配需要压缩的文件后缀
          test: /\.(js|css|svg|woff|ttf|json|html)$/,
          // 大于10kb的会压缩
          threshold: 10240,
          // 其余配置查看compression-webpack-plugin
          deleteOriginalAssets: false
        })
      )
    }

    return {
      entry: `./src/entry-${target}.js`,
      devtool: !isProduction ? 'source-map' : 'none',
      target: TARGET_NODE ? 'node' : 'web',
      node: false,
      output: {
        libraryTarget: TARGET_NODE ? 'commonjs2' : undefined
      },
      plugins
    }
  },
  chainWebpack: config => {
    config.plugins.delete('html')
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
    config.resolve.alias
      .set('utils', resolve('src/assets/utils/'))
      .set('api', resolve('src/modules/API.js'))

    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        merge(options, {
          optimizeSSR: true,
          extractCSS: true
        })
      })
  },
  filenameHashing: false,
  css: {}
}
