/* eslint-disable */
module.exports = function (api) {
  api.cache(true)

  const plugins = []
  const presets = ['next/babel']

  return { plugins, presets }
}
