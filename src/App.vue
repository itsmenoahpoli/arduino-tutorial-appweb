<script lang="ts" setup>
import { onMounted } from "vue";

onMounted(() => {
  console.log("App Mounted!");
});
</script>

<template>
  <notifications />
  <RouterView />
</template>

<style lang="scss" scoped></style>
