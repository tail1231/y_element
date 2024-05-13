<template>
  <i
    class="y-icon"
    :class="{ [`y-icon--${type}`]: type }"
    :style="customerStyles"
    v-bind="$attrs"
  >
    <font-awesome-icon v-bind="filteredProps" />
  </i>
</template>

<script setup lang="ts">
import { omit } from "lodash-es";
import type { IconProps } from "./types";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { computed } from "vue";

defineOptions({ name: "YIcon", inheritAttrs: false });
const props = defineProps<IconProps>();
const filteredProps = computed(() => omit(props, ["type", "color"]));
const customerStyles = computed(() =>
  props.color
    ? {
        color: props.color,
      }
    : {}
);
</script>

<style></style>
