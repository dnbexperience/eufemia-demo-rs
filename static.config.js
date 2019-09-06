import path from 'path'

export default {
  getRoutes: async () => {
    // Use getRoutes to generate progressively pages e.g. from an API
    return []
  },
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages')
      }
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap')
  ]
}
