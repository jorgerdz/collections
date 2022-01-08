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
	import CollectionHero from '/src/lib/CollectionHero.svelte'
	import OptionSelector from '/src/lib/OptionSelector.svelte'
	import Grid from '/src/lib/Grid.svelte'
	import DropDetector from "/src/lib/DropDetector.svelte"
	//import Modal from '$lib/Modal.svelte';
	import Modal from 'svelte-simple-modal';
	import ModalButton from '$lib/ModalButton.svelte';
	import ModalSampleContent from '$lib/ModalSampleContent.svelte';
	import ModalSampleContent2 from '$lib/ModalSampleContent2.svelte';
	import CreateCollectionForm from '$lib/CreateCollectionForm.svelte';
	import {createItems} from '/src/lib/stores.js'
	import { browser } from '$app/env';
	import { writable } from 'svelte/store';
	
	export let collection;
	export let items = createItems(collection.items)
	export let modalComponent = ModalSampleContent;
	
	const modal = writable(null);
	$: console.log(collection) //write record here
	
	function showModal(event) {
		modal.set(event.detail.component);
	}
</script> 

<div class:dark={collection.dark}>
	<CollectionHero collection={collection} />
	<CreateCollectionForm />
	<ModalButton on:showSurprise={showModal} />
	<Modal show={$modal} />
	<OptionSelector on:create={showModal} bind:columns={collection.columns} bind:ordered={collection.ordered} bind:dark={collection.dark} />
	<DropDetector />
	<Grid ordered={collection.ordered} items={items} columns={collection.columns} dark={collection.dark} />

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