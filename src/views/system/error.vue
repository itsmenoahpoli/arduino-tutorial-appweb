<script lang="ts" setup>
import { useRouter } from "vue-router";
import { FwbButton } from "flowbite-vue";

const router = useRouter();
</script>

<template>
  <div class="h-screen w-screen bg-slate-100">
    <div class="h-[60px] w-screen bg-slate-900 shadow"></div>

    <div class="h-full flex flex-col items-center gap-y-4 pt-[10%]">
      <h1 class="text-[32px] font-bold">PAGE NOT FOUND</h1>

      <FwbButton color="blue" @click.once="router.back()">Back</FwbButton>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
