<script setup lang="ts">
import { onMounted, ref } from "vue";
import Button from "./components/Button/Button.vue";
import Collapse from "./components/Collapse/Collapse.vue";
import CollapseItem from "./components/Collapse/CollapseItem.vue";
import Icon from "./components/Icon/Icon.vue";
import Alert from "./components/Alert/Alert.vue";

const openedValue = ref(["a"]);

onMounted(() => {
  setTimeout(() => {
    // openedValue.value = ["a", "b"];
  }, 2000);
});
</script>

<template>
  <header></header>

  <main>
    <Button plain>Plain Button</Button>
    <Button round>Round Button</Button>
    <Button circle>CMY</Button>
    <Button disabled>Disabled Button</Button><br /><br />
    <Button type="primary">Primary</Button>
    <Button type="success">Success</Button>
    <Button type="info">Info</Button>
    <Button type="warning">Warning</Button>
    <Button type="danger">Danger</Button><br /><br />
    <Button type="primary" plain>Primary</Button>
    <Button type="success" plain>Success</Button>
    <Button type="info" plain>Info</Button>
    <Button type="warning" plain>Warning</Button>
    <Button type="danger" plain>Danger</Button><br /><br />
    <Button size="large">Large</Button>
    <Button size="small">Small</Button><br /><br />
    <Button size="large" loading>Loading</Button><br /><br />
    <Button size="large" icon="arrow-up">arrow</Button><br /><br />
    {{ openedValue }}<br /><br />
    <Collapse v-model="openedValue" accordion>
      <CollapseItem name="a" title="标题(可点击)">
        <h1>headline title</h1>
        <div>this is content A</div>
      </CollapseItem>
      <CollapseItem name="b" title="标题(可点击)">
        <h1>headline title</h1>
        <div>this is content B</div>
      </CollapseItem>
      <CollapseItem name="c" title="标题(禁用)" disabled>
        <!-- <template #title>
          <h1>标题(禁用)</h1>
        </template> -->
      </CollapseItem> </Collapse
    ><br /><br />
    <Icon icon="arrow-up" type="primary" color="#00f" /><br /><br />
    <Alert
      center
      show-icon
      type="success"
      title="Success Alert"
      description="Success Description"
    /><br /><br />
    <Alert
      show-icon
      type="warning"
      title="Warning Alert"
      description="Warning Description"
      close-text="Gotcha"
    /><br /><br />
    <Alert
      show-icon
      type="info"
      title="Info Alert"
      description="Info Description"
      close-text="Gotcha" 
    /><br /><br />
    <Alert
      show-icon
      type="danger"
      title="Error Alert"
      description="Error Description"
      :closable="false"
    /><br /><br />
  </main>
</template>

<style scoped></style>
