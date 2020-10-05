const path = require('path')
const webpack = require('webpack')

module.exports = {
  devIndicators: {
    autoPrerender: false,
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
