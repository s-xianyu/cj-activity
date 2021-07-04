const path = require('path');

// 项目的打包输出目录
const outputDir = process.env.VUE_APP_OUTPUT_DIR

const isProduction = process.env.NODE_ENV === 'production';

// 项目部署路径的BASE_URL
const publicPath = process.env.VUE_APP_TYPENAME === 'dev' ? './' : `${process.env.BASE_URL || './'}`;

const publicJs = [
  `${publicPath}static/commonJs/vue2.6.12.min.js`,
  `${publicPath}static/commonJs/vue-router3.4.9.min.js`,
  `${publicPath}static/commonJs/axios0.21.min.js`,
];

const cdn = {
  // 开发环境
  dev: {
    css: [],
    js: [
      // 'https://cdn.jsdelivr.net/npm/eruda'
    ],
  },
  // 生产环境
  build: {
    css: [],
    js: publicJs,
  }
}

module.exports = {
  devServer: {
    port: 4000,
    proxy: {
      '/api': {
        target: process.env.VUE_APP_API,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  },
  lintOnSave: false, // 关闭eslint
  productionSourceMap: false, // 关闭生产环境的sourcemap
  publicPath: publicPath, // 生成环境部署路径
  assetsDir:'static', // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  indexPath:'index.html', // index.html 的输出路径 (相对于 outputDir)
  outputDir: outputDir, // 当运行 build 时生成的生产环境构建文件的目录
  chainWebpack: config => {
    config.plugin('html').tap((args) => {
      if (isProduction) {
        args[0].cdn = cdn.build;
        args[0].title = '活动页'
      } else {
        args[0].cdn = cdn.dev;
        args[0].title = '活动页'
      }
      return args;
    });
  },
  configureWebpack: config => {
    config.output.chunkFilename = 'static/js/[name].js'
    if (isProduction) {
      config.externals = {
        'vue': 'Vue',
        'vue-router': 'VueRouter',
        'axios': 'axios'
      }
    }
  },
  css: {
    extract: { ignoreOrder: true },
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({//这里是配置项，详见官方文档
            rootValue : 50, // 换算的基数
            selectorBlackList  : ['weui','mu'], // 忽略转换正则匹配项
            propList   : ['*'],
          }),
        ]
      }
    }
  }
}

