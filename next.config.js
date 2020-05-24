const debug = process.env.NODE_ENV !== "production";

module.exports = {
  exportPathMap: function () {
    return {
      "/": {page: "/"},
    }
  },
  assetPrefix: !debug ? '/sh24' : '',
  webpack: (config, {dev}) => {
    // Perform customizations to webpack config
    config.module.rules = config.module.rules.map(rule => {
      if (rule.loader === 'babel-loader') {
        rule.options.cacheDirectory = false
      }
      return rule
    })
    return config
  }
}
