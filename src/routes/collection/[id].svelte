<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ page, fetch, session, stuff }) {
	  const url = "";
	  //const res = await fetch(url);
	  const res = await fetch(`/collections/${page.params.id}.json`);
	  const collection = await res.json();
	  return {
	    props: {
	      collection: collection
	    }
	  };

	  return {
	    status: res.status,
	    error: new Error(`Could not load ${url}`)
	  };
	}
</script>

<script>
	import CollectionHero from '/src/lib/CollectionHero.svelte'
	import Grid from '/src/lib/Grid.svelte'
	import DropDetector from "/src/lib/DropDetector.svelte"
	import {createItems} from '/src/lib/stores.js'
	export let collection;
	export let items = createItems(collection.items)	
</script>

<div>
	<CollectionHero collection={collection} />
	<DropDetector />
	<Grid items={items} />
</div>