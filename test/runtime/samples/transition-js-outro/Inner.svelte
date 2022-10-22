<script>
	import { onDestroy, createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	onDestroy(() => dispatch('destroyed'));
</script>

<div></div>
