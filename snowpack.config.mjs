import autoprefixer from 'autoprefixer';
import sveltePreprocess from 'svelte-preprocess';

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
          postcss: {
            plugins: [autoprefixer],
          },
        }),
      },
    ],
  ],
};
