<script context="module">
	export async function load({page, fetch}) {
	  const res = await fetch(`/collections/${page.params.id}.json`);
	  const collection = await res.json();
	  return {
	    props: {
	      collection
	    }
	  };
	}
</script>

<script>
	import CollectionHero from '$lib/components/CollectionHero.svelte'
	import OptionSelector from '$lib/components/OptionSelector.svelte'
	import Grid from '$lib/components/Grid.svelte'
	import DropDetector from "$lib/components/DropDetector.svelte"
	import Modal from 'svelte-simple-modal';
	import {items as store} from '$lib/utils/stores.js'
	import { writable } from 'svelte/store';
	
	export let collection;
	export let items = store(collection.items)

	const modal = writable(null);
	$: console.log(collection) // persist record here
	
	function showModal(event) {
		modal.set(event.detail.component);
	}
</script> 

<div class:dark={collection.dark}>
	<CollectionHero collection={collection} />
	<Modal show={$modal} />
	<OptionSelector on:create={showModal} bind:columns={collection.columns} bind:ordered={collection.ordered} bind:dark={collection.dark} />
	<DropDetector />
	<Grid on:edit={showModal} ordered={collection.ordered} {items} columns={collection.columns} dark={collection.dark} />

</div>

<style>
	div {
		padding: 8px;
	}
	.dark {
		background-color: #28112B;
		color: #BDCFB5;
	}
	
</style>