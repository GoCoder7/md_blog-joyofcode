import type { Snippet } from 'svelte';

export type category = 'svletekit' | 'svelte';

export type Frontmatter = {
	title: string;
	description: string;
	date: Date;
	categories: category[];
	published: boolean;
};
export type Post = Frontmatter & {
	slug: string;
};
export type MarkdownFile = {
	default: Snippet;
	metadata: Frontmatter;
};
