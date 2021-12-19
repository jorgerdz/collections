<div>
	<img src={item.img} />
	<div class="details">
		<h1>{item.name}</h1>
	</div>
	<p>{item.desc}</p>
</div>

<style>
  div {
    display: flex;
    padding: 20px;
    max-width: 100%;
  }
  div > img {
    width: 50%;
  }
  div > .details {
    font-family: "Courier New", Courier, monospace;
    padding: 20px;
  }
  div > p {
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