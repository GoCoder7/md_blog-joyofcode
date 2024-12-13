import { escapeSvelte, mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import { createHighlighter } from 'shiki';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import rehypeUnwrapImages from 'rehype-unwrap-images';

// https://shiki.style/themes
const theme = 'dracula';
const highlighter = await createHighlighter({
	themes: [theme],
	// https://shiki.style/languages
	langs: [
		'js',
		'ts',
		'lisp',
		'py',
		'c++',
		'c#',
		'sql',
		'svelte',
		'md',
		'http',
		'html',
		'css',
		'http',
		'rs',
		'kt',
		'swift',
		'dart',
		'json',
		'yaml',
		'toml',
		'shell',
		'applescript',
		'ps'
	]
});

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexConfig = {
	extensions: ['md'],
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme }));
			return `{@html \`${html}\`}`;
		}
	},
	remarkPlugins: [
		[
			remarkToc,
			{
				maxDepth: 4,
				heading: '(table[ -]of[ -])?contents?|toc|목차'
			}
		]
	],
	rehypePlugins: [rehypeSlug, rehypeUnwrapImages]
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter()
	},

	extensions: ['.svelte', '.md']
};

export default config;
