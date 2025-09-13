<script>
  let count = 0;
  function increment() {
    count += 1;
  }
</script>

<h2>Hello from Svelte!</h2>
<button on:click={increment}>Svelte Count: {count}</button>
