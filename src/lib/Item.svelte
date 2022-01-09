<script>
  import { onMount } from "svelte";
  import { createEventDispatcher } from 'svelte';
  import {createItems} from '../lib/stores';
  import CreateCollectionForm from '$lib/CreateCollectionForm.svelte'
  import {bind} from 'svelte-simple-modal';
  export let item;
  export let index;
  export let ordered;
  export let dark;
  export let randomColor;
  
  const dispatch = createEventDispatcher();
  const {remove} = createItems();

  onMount(() => {
    randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
  })

  function _remove() {
    remove(item)
  }
  function _edit() {
    console.log('editing')
    let component = bind(CreateCollectionForm, {item});
    console.log(component)
    dispatch('edit', {component})
  }
</script>

<div>
  <div class="controls">
    <button on:click={_edit} id="edit">e</button>
    <button on:click={_remove} id="remove">r</button>
  </div>
	<a href={item.url} style="background-color: {dark ? '' : randomColor};" class:dark>
    <h2 class:hidden={!ordered}>{index + 1}.</h2>
		<img src={item.img} />
		<div class="details">
			<h1>{item.name}</h1>
		</div>
		<p>{item.desc || ""}</p>
	</a>
</div>

<style>
  div {
    width: 100%;
  }
  div a {
    display: block;
    padding: 25px;
    text-decoration: none;
    padding: 10px;
    margin: 5px;
  }
  div > a > img {
    width: 100%;
  }
  h2 {
    margin: 4px 0;
    text-align: center;
    font-size: 18px;
  }
  h1 {
    text-align: center;
  }
  .hidden {
    display: none;
  }

  .dark {
      background-color: #B287A3;
      color: #BDCFB5
  }

  .controls {
    display: none;
    position: absolute;
    padding: 10px;
  }

  div:hover .controls {
    display: block;
  }

  /* img {
    transform: rotate(
21deg) skew(
6deg,
-3deg);
    box-shadow: -1em 0.5em 0 black;
  } */
  
</style>

