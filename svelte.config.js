import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
  preprocess: vitePreprocess(),
  kit: {
	adapter: adapter({
	  pages: 'docs',
	  assets: 'docs',
	  fallback: '404.html',
	  precompress: false
	}),
	paths: {
	  base: '/faq-schema-generator'
	},
prerender: {
    entries: ['*', '/sitemap_index.xml'], // <--- ADD THIS ENTRY
    handleHttpError: 'warn'
}  }
};

export default config;
