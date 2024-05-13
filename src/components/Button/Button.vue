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
      'is-loading': loading,
    }"
    :disabled="disabled || loading"
  >
    <Icon icon="spinner" spin v-if="loading" />
    <Icon :icon="icon" v-if="icon" />
    <span> <slot /></span>
  </button>
</template>

<script setup lang="ts">
import type { ButtonProps } from "./types";
import Icon from "../Icon/Icon.vue";
defineOptions({ name: "YButton", inheritAttrs: false });
defineProps<ButtonProps>();
</script>

<style></style>
