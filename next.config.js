module.exports = {
  experimental: {
    concurrentFeatures: true,
  },
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.md$/i,
        type: 'asset/source'
      }
    )
    return config
  }
}