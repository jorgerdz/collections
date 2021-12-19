<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ page, fetch, session, stuff }) {
	  const url = "";
	  //const res = await fetch(url);
	  const res = await fetch(`/collections/${page.params.id}.json`);
	  const collection = await res.json();
	  return {
	    props: {
	      collection: collection,
	      items: collection.items
	    }
	  };

	  return {
	    status: res.status,
	    error: new Error(`Could not load ${url}`)
	  };
	}
</script>

<script>
	import Item from "/src/lib/Item.svelte"
	export let collection;
	export let items;
	console.log(items)
</script>

<div>
	{#each collection.items as item, i}
	{#if item}
		<Item item={item} />
		
	{/if}
{/each}
</div>