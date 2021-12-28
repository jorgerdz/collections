<div>
	<a href={item.url}>
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
  }
  div > a > img {
    width: 100%;
  }
  div > a > .details {
    font-family: "Courier New", Courier, monospace;
  }
</style>

<script>
export let item;
</script>