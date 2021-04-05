//https://github.com/snowpackjs/snowpack/blob/main/create-snowpack-app/app-template-svelte-typescript/svelte.config.js
const autoPreprocess = require('svelte-preprocess');

module.exports = {
  preprocess: autoPreprocess({
    defaults: {
      script: 'typescript',
    },
  }),
};