<script>
    import {createItems} from './stores'
    const {add} = createItems();
    export let item = {
        img: ''
    }
    const submit = function() {
        console.log('submitting', item)
        debugger
        add(item)
    }
</script>

<div>
    <h1>Create new item</h1>
    <form on:submit|preventDefault={submit} class="container">
        <div class="form-section">
            <img src={item.img} alt="collection image" />
        </div>
        <div class="form-section">
            <div class="form-item">
                <label for="title" />
                <input bind:value={item.name} id="title" />
            </div>
            <div class="form-item">
                <label for="url" />
                <input bind:value={item.url} id="url" />
            </div>
            <div class="form-item">
                <label for="desc" />
                <textarea bind:value={item.desc} id="desc" />
            </div>
        </div>
        <button type="submit"></button>
    </form>
</div>

<style>
    .container {
        display: flex;
        flex-wrap: wrap;
    }
    .form-section {
        flex: auto;
    }
    @media (max-width: 650px) {
        .form-section {
            min-width: 100%;
        }
    }
</style>
