const path = require('path')
const webpack = require('webpack')

module.exports = {
  devIndicators: {
    autoPrerender: false,
  },
  webpack: (config) => {
    config.resolve.alias['react'] = path.resolve(__dirname, 'node_modules/react')
    // config.resolve.alias['react-dom'] = path.resolve(__dirname, 'node_modules/react-dom')
    console.log(config)
    return config
  },
  webpackDevMiddleware: (config) => {
    // Don't ignore all node modules.
    config.watchOptions.ignored = config.watchOptions.ignored.filter(
      (ignore) => !ignore.toString().includes('node_modules'),
    )

    // Ignore all node modules except those here.
    config.watchOptions.ignored = [
      ...config.watchOptions.ignored,
      /node_modules([\\]+|\/)+(?!disqplus)/,
      /\disqplus([\\]+|\/)node_modules/,
    ]

    return config
  },
}
