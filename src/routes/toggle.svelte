<script lang="ts">
	import { theme } from '$lib/theme.svelte';
	import { Moon, Sun } from 'lucide-svelte';
	import { fly } from 'svelte/transition';

	const { userTheme, toggleTheme } = $derived(theme());
</script>

<button onclick={toggleTheme}>
	{#if userTheme === 'dark'}
		<div in:fly={{ x: 10, y: -10 }}>
			<Moon />
			<span>{userTheme.toUpperCase()}</span>
		</div>
	{:else}
		<div in:fly={{ x: -10, y: 10 }}>
			<Sun />
			<span>{userTheme.toUpperCase()}</span>
		</div>
	{/if}
</button>

<style>
	button {
		padding: 0;
		border: none;
		background: none;
		box-shadow: none;
	}
	button > * {
		display: flex;
		gap: var(--size-2);
		align-items: center;
	}
</style>
