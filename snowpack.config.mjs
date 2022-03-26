import autoprefixer from 'autoprefixer';
import sveltePreprocess from 'svelte-preprocess';
import db from './api/notion.mjs';

export default {
  env: {
    db,
  },
  mount: {
    public: '/',
    src: '/dist',
  },
  plugins: [
    [
      '@snowpack/plugin-svelte',
      {
        preprocess: sveltePreprocess({
          postcss: {
            plugins: [autoprefixer],
          },
        }),
      },
    ],
  ],
};
