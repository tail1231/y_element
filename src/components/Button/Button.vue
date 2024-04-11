<template>
  <button
    class="y-button"
    :class="{
      [`y-button--${type}`]: type,
      [`y-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
    }"
    :disabled="disabled"
  >
    <span><slot /></span>
  </button>
</template>

<script setup lang="ts">
import type { ButtonProps } from "./types";
defineOptions({ name: "YButton", inheritAttrs: false });
defineProps<ButtonProps>();
</script>

<style>
.y-button {
}
</style>
