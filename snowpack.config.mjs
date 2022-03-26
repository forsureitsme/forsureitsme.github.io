import autoprefixer from 'autoprefixer';
import sveltePreprocess from 'svelte-preprocess';
import DATABASE from './api/notion.mjs';

export default {
  mount: {
    public: '/',
    src: '/dist',
  },
  plugins: [
    [
      '@snowpack/plugin-svelte',
      {
        preprocess: sveltePreprocess({
          replace: [['DATABASE', JSON.stringify(DATABASE)]],
          postcss: {
            plugins: [autoprefixer],
          },
        }),
      },
    ],
  ],
};
