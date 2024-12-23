import { getPosts } from '$lib/utils';
import { json, type RequestHandler } from '@sveltejs/kit';

export const prerender = true;

export const GET: RequestHandler = async (event) => {
	const posts = await getPosts();
	return json(posts);
};
