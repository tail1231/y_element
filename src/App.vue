<script setup lang="ts">
import Button from "./components/Button/Button.vue";
</script>

<template>
  <header></header>

  <main>
    <Button type="primary">Default Button</Button>
    <Button plain>plain Button</Button>
    <Button round>round Button</Button>
    <Button circle>circle Button</Button>
    <Button disabled>disabled Button</Button>
  </main>
</template>

<style scoped></style>
