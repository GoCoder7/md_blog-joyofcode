import type { SvelteComponent } from 'svelte';

export type categories = 'svletekit' | 'svelte';

export type Frontmatter = {
	title: string;
	description: string;
	date: Date;
	categories: string[];
	published: boolean;
};
export type Post = Frontmatter & {
	slug: string;
};
export type MarkdownFile = {
	default: SvelteComponent;
	metadata: Frontmatter;
};
