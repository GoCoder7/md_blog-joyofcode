import path from 'path';
import type { Frontmatter, MarkdownFile, Post } from './types';

type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];

export function formatDate(date: string, dateStyle: DateStyle = 'medium', locales = 'ko') {
	const formatter = new Intl.DateTimeFormat(locales, { dateStyle });
	return formatter.format(new Date(date));
}

export async function getPosts() {
	let posts: Post[] = [];
	const fileEntries = import.meta.glob<MarkdownFile>('/src/posts/*.md', { eager: true });
	for (const [filePath, file] of Object.entries(fileEntries)) {
		const slug = path.basename(filePath).replace('.md', '');
		const frontmatter: Frontmatter = file.metadata;
		const post: Post = { slug, ...frontmatter };
		if (post.published) {
			posts.push(post);
		}
	}

	return posts;
}
