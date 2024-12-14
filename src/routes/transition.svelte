<script lang="ts">
	import { fade } from 'svelte/transition';
	const { children, url } = $props();
</script>

{#key url}
	<div class="transition" in:fade={{ duration: 200 }}>
		{@render children()}
	</div>
{/key}

<style>
	.transition {
		height: 100%;
	}
</style>
