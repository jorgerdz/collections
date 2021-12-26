<script>
  import { onMount } from "svelte";

  onMount(() => {
    window.addEventListener("drop", ev => {
      ev.preventDefault();
      if (ev.dataTransfer.items) {
        console.log(Array.from(ev.dataTransfer.items));
        Array.from(ev.dataTransfer.items).forEach((item, i) => {
          if (item.kind === "file") {
            const file = item.getAsFile();
            console.log("... item[" + i + "].name = " + item.name);
          } else {
            const url = event.dataTransfer.getData("URL");
            console.log(url);
            console.log("fetching OG data...");
            fetch(`/api/parse?url=${encodeURIComponent(url)}`);
          }
        });
      } else {
        ev.dataTransfer.files.forEach(file => {
          console.log("... file[" + i + "].name = " + file.name);
        });
      }
    });
    window.addEventListener("dragover", ev => {
      console.log("File(s) in drop zone");

      // Prevent default behavior (Prevent file from being opened)
      ev.preventDefault();
    });
  });
</script>

<style>
</style>