<script>
import { createEventDispatcher } from 'svelte';
import CreateCollectionForm from './CreateCollectionForm.svelte';

export let ordered;
export let columns;
export let dark;

const dispatch = createEventDispatcher();
const createNewItem = function() {
    dispatch('create', {
        component: CreateCollectionForm
    })
}
</script>

<div>
    <div class="control">
        <button on:click={createNewItem}>+</button>
    </div>

    <div class="control">
        <input type="checkbox" bind:checked={ordered} /> Ordered
    </div>

    <div class="control">
        <input type="checkbox" bind:checked={dark} /> Dark mode
    </div>

    <div class="control">
        <select bind:value={columns}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
    </div>
</div>

<style>
    .control {
        display: block;
    }
</style>