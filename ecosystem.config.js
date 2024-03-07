module.exports = {
  apps: [
    {
      name: 'app-ohhoe',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3033,
      }
    }
  ]
}
