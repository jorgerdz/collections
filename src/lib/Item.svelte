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
  div a {
    display: flex;
    padding: 20px;
    max-width: 100%;
  }
  div > a > img {
    width: 50%;
  }
  div > a > .details {
    font-family: "Courier New", Courier, monospace;
    padding: 20px;
  }
  /* @media (max-width: 1000px) {
                            div > img {
                              width: 100%;
                            }
                          } */
</style>

<script>
export let item;
</script>