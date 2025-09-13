<template>
  <div>
    <h2>Hello from Vue!</h2>
    <button @click="count++">Vue Count: {{ count }}</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const count = ref(0);
</script>
