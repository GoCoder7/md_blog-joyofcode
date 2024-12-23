import type { MarkdownFile } from '$lib/types';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	try {
		const file: MarkdownFile = await import(`$lib/../posts/${params.slug}.md`);
		return {
			post: file.default,
			frontmatter: file.metadata
		};
	} catch (e) {
		throw error(404, `No slug "${params.slug}" found`);
	}
};
