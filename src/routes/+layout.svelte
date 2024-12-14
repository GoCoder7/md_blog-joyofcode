<script lang="ts">
	import { fade } from 'svelte/transition';
	import Header from './header.svelte';
	import Footer from './footer.svelte';

	import 'open-props/style';
	import 'open-props/normalize';
	import 'open-props/buttons';
	import '../app.css';
	import Transition from './transition.svelte';

	const { children, data } = $props();
	const url = $derived(data.url);
</script>

<div class="layout">
	<Header />
	<main>
		<!-- {@render children()} -->
		<Transition {children} {url} />
	</main>

	<Footer />
</div>

<style>
	.layout {
		height: 100%;
		max-inline-size: 1440px;
		display: grid;
		grid-template-rows: auto 1fr auto;
		margin-inline: auto;
		padding-inline: var(--size-7);
	}

	main {
		padding-block: var(--size-9);
	}

	@media (min-width: 1440px) {
		.layout {
			padding-inline: 0;
		}
	}
</style>
