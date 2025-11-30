import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
  preprocess: vitePreprocess(),
  kit: {
	adapter: adapter({
	  pages: 'docs',
	  assets: 'docs',
	  fallback: undefined,
	  precompress: false
	}),
	paths: {
	  base: '/faq-schema-generator'
	},
prerender: {
    entries: ['*', '/sitemap_index_v3.xml'],
    handleHttpError: 'warn'
}  }
};

export default config;
