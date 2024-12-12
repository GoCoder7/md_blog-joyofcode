import type { Frontmatter, MarkdownFile, Post } from '$lib/types';
import { json, type RequestHandler } from '@sveltejs/kit';
import path from 'path';

async function getPosts() {
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

export const GET: RequestHandler = async (event) => {
	const posts = await getPosts();
	return json(posts);
};
