<script>
  import Item from "$lib/Item.svelte";
  // Import the functions you need from the SDKs you need
  // import { initializeApp } from "firebase/app";
  // // TODO: Add SDKs for Firebase products that you want to use
  // // https://firebase.google.com/docs/web/setup#available-libraries
  // import { getStorage, ref, listAll } from "firebase/storage";

  // // Your web app's Firebase configuration
  // const firebaseConfig = {
  //   apiKey: process.env["firebaseApiKey"],
  //   authDomain: process.env["firebaseAuthDomain"],
  //   projectId: process.env["firebaseProjectId"],
  //   storageBucket: process.env["firebaseStorageBucket"],
  //   messagingSenderId: process.env["firebaseMessagingSenderId"],
  //   appId: process.env["firebaseAppId"]
  // };

  // // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
  // // Get a reference to the storage service, which is used to create references in your storage bucket
  // const storage = getStorage(app);
  // const listRef = ref(storage, "collections");
  // import { initializeApp } from "firebase-admin";
  // import { getStorage } from "firebase-admin";
  // const firebaseConfig = {
  //   apiKey: process.env["firebaseApiKey"],
  //   authDomain: process.env["firebaseAuthDomain"],
  //   projectId: process.env["firebaseProjectId"],
  //   storageBucket: process.env["firebaseStorageBucket"],
  //   messagingSenderId: process.env["firebaseMessagingSenderId"],
  //   appId: process.env["firebaseAppId"]
  // };

  // initializeApp(firebaseConfig);

  // const bucket = getStorage().bucket();

  // console.log(listRef);
  // // Find all the prefixes and items.
  // listAll(listRef)
  //   .then(res => {
  //     console.log(res.items);
  //     res.prefixes.forEach(folderRef => {
  //       // All the prefixes under listRef.
  //       // You may call listAll() recursively on them.
  //     });
  //     res.items.forEach(itemRef => {
  //       // All the items under listRef.
  //     });
  //   })
  //   .catch(error => {
  //     // Uh-oh, an error occurred!
  //   });
</script>

<h1>Welcome to SvelteKit Project Dawn</h1>
<p>This is about presenting collections in a user friendly mandalskslk</p>

<ul>
  <li><a href="collection/1">1.</a></li>
  <li><a href="collection/playlists">playlists.</a></li>
</ul>