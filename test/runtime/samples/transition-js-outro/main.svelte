<script>
	import Inner from './Inner.svelte';

	export let visible = true, destroyed = false;

	function foo(node) {
		return {
			duration: 100,
			tick: t => {
				node.foo = t;
			}
		};
	}

	const onDestroy = () => {
		destroyed = true;
	};
</script>

{#if visible}
	<div transition:foo>
		<Inner on:destroyed={onDestroy}/>
	</div>
{/if}
