module.exports = {
  app: {
    build: {
      command: 'npm run build',
      output: 'dist',
    },
    redirects: [
      { from: '/*', to: '/index.html', status: 200 }
    ]
  }
};
