<script>
  export let collection;
</script>

<div class:dark={collection.dark}>
  <h1>{collection.name}</h1>
</div>

<style>
  .dark h1 {
    color: #8DAA91
  }
</style>
