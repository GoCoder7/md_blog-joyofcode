<script lang="ts">
	import { formatDate } from '$lib/utils';

	const { data } = $props();
	const { frontmatter, post } = data;
</script>

<svelte:head>
	<title>{frontmatter.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={frontmatter.title} />
</svelte:head>

<article>
	<hgroup>
		<h1>{frontmatter.title}</h1>
		<p>Published at {formatDate(frontmatter.date.toString(), undefined, 'en')}</p>
	</hgroup>

	<div class="tags">
		{#each frontmatter.categories as category}
			<span class="surface-4">&num;{category}</span>
		{/each}
	</div>
	<div class="prose">
		{@render post()}
	</div>
</article>

<style>
	article {
		max-inline-size: var(--size-content-3);
		margin-inline: auto;
	}

	h1 {
		text-transform: capitalize;
	}
	h1 + p {
		margin-top: var(--size-2);
		color: var(--text-2);
	}
	.tags {
		display: flex;
		gap: var(--size-3);
		margin-top: var(--size-7);
	}

	.tags > * {
		padding: var(--size-2) var(--size-3);
		border-radius: var(--radius-round);
	}
</style>
