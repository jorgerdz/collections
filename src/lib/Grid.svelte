<script>
import Item from "/src/lib/Item.svelte";
export let items;
export let columns;
export let ordered;
export let dark;
</script>

<div style="--columns: {columns}">
	<div class="grid">
		{#each $items as item, i}
			<Item {item} {ordered} index={i} {dark} />
		{/each}
	</div>
</div>

<style>
	div.grid {
	  display: grid;
	  grid-template-columns: repeat(var(--columns), minmax(0, 1fr));
	}
</style>