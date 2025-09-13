<script>
  let count = 0;
  function increment() {
    count += 1;
  }
</script>

<div style="display: flex; align-items: center; gap: 10px;">
  <h2>Hello from Svelte!</h2>
  <button on:click={increment}>Svelte Count: {count}</button>
</div>
