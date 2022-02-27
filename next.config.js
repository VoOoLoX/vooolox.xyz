module.exports = {
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