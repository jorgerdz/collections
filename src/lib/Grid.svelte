<script>
import Item from "/src/lib/Item.svelte";
export let items;
export let columns = "3";
</script>

<div style="--columns: {columns}">
	<select bind:value={columns}>
		<option value="1">1</option>
		<option value="2">2</option>
		<option value="3">3</option>
	</select>
	<div class="grid">
		{#each $items as item, i}
			<Item item={item} />
		{/each}
	</div>
</div>

<style>
	div.grid {
	  display: grid;
	  grid-template-columns: repeat(var(--columns), minmax(0, 1fr));
	}
</style>