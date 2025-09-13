<script>
  let count = 0;
  function increment() {
    count += 1;
  }
</script>

<p>Below Button counter is loaded from a svelte component</p>
<button on:click={increment}>Count: {count}</button>
