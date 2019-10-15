module.exports = {
    lintOnSave: false,
    devServer: {
        // proxy: 'http://127.0.0.1:80',
        proxy: {
          '/': {
            target: 'http://127.0.0.1:80',
            ws: true,
            changeOrigin: true
          }
        },
        // historyApiFallback: true
        //  {
        //   rewrites: [
        //     {from: /\/index/,to: '/index.html'}
        //   ]
        // }

      }
}