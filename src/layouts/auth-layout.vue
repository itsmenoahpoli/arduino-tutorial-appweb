<script lang="ts" setup>
import { TEXT_CONSTANTS } from "~/constants";
</script>

<template>
  <div class="h-screen w-full bg-slate-100 auth-layout">
    <div class="h-[40px] w-full bg-slate-900 flex items-center shadow px-8 fixed top-0">
      <h1 class="text-md text-white font-bold uppercase">{{ TEXT_CONSTANTS.APP_TITLE }}</h1>
    </div>

    <div class="h-full flex flex-col items-center gap-y-4 pt-[10%]">
      <div class="w-1/5 max-lg:w-4/5 bg-white p-10" style="zoom: 0.85">
        <RouterView />

        <div class="text-center mt-5">
          <p class="text-xs text-gray-700">&copy; 2024 All Rights Reserved</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
