/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  exclude: [
    '**/.gitignore', 
    '**/package.json', 
    '**/package-lock.json', 
    '**/tsconfig.json', 
    '**/snowpack.config.js', 
    '**/svelte.config.js', 
    '**/README.md',
    '**/types/**',
    '**/node_modules/**'
  ],
  mount: {
    //public: {url: '/', static: true},
    //src: {url: ''},
    /* ... */
  },
  plugins: [
    [
      '@snowpack/plugin-typescript',
      {
        args: '--project tsconfig.json'
      },
    ],
    '@snowpack/plugin-svelte',
    /* ... */
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    'env': { 
      'NODE_ENV': 'development'
    }
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    'clean': true,
    'out': '../dist/frontend',
    'watch': true,
    'sourcemap': false
    /* ... */
  },
};
