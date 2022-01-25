<script>
import Item from "$lib/components/Item.svelte";
import { createEventDispatcher } from "svelte";
export let items;
export let columns;
export let ordered;
export let dark;

$: console.log($items)

const dispatch = createEventDispatcher();
function _edit(ev) {
	dispatch(ev.type, ev.detail);
}
</script>

<div style="--columns: {columns}">
	<div class="grid">
		{#each $items as item, i}
			<Item on:edit={_edit} {item} {ordered} index={i} {dark} />
		{/each}
	</div>
</div>

<style>
	div.grid {
	  display: grid;
	  grid-template-columns: repeat(var(--columns), minmax(0, 1fr));
	}
</style>