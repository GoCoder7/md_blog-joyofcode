import type { Post } from '$lib/types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const res = await fetch('/api/posts');
	const posts: Post[] = await res.json();
	return { posts };
};
