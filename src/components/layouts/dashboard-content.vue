<script lang="ts" setup></script>

<template>
  <div class="h-screen w-full content">
    <div class="h-full w-full">
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  width: calc(100% - 400px);
  padding: 60px;
}
</style>
