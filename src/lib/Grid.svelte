<script>
import Item from "/src/lib/Item.svelte";
export let items;
</script>

<div>
	{#each $items as item, i}
		<Item item={item} />
  {/each}
</div>