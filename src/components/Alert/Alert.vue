<template>
  <Transition name="fade">
    <div
      v-show="!AlertClose"
      class="y-alert"
      :class="{ [`y-alert--${type}`]: type }"
      :style="{ justifyContent: center ? 'center' : 'flex-start' }"
    >
      <div v-if="showIcon" class="y-alert__icon">
        <Icon :icon="dynamicIcon" />
      </div>
      <div class="y-alert__content">
        <div :class="{ [`y-alert-${type}-title-color`]: title }">
          {{ title }}
        </div>
        <div :class="{ [`y-alert-${type}-title-color`]: description }">
          {{ description }}
        </div>
      </div>
      <div
        v-if="closable"
        class="y-alert__close-icon"
        @click="handleCloseAlert"
      >
        <span
          v-if="closeText"
          :class="{ [`y-alert-${type}-title-color`]: closeText }"
          >{{ closeText }}</span
        >
        <Icon v-else icon="xmark" />
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import type { AlertProps } from "./types";
import Icon from "../Icon/Icon.vue";
import { computed, ref } from "vue";

defineOptions({
  name: "YAlert",
  inheritAttrs: false,
});
const props = withDefaults(defineProps<AlertProps>(), {
  closable: true,
});

const ALERT_ICONS = {
  success: "circle-check",
  warning: "circle-exclamation",
  info: "circle-info",
  danger: "circle-xmark",
};

const AlertClose = ref(false);

const dynamicIcon = computed(() => {
  if (props.type) return ALERT_ICONS[props.type];
  return "";
});

const handleCloseAlert = () => (AlertClose.value = true);
</script>

<style scoped></style>
