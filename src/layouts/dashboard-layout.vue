<script setup lang="ts">
import DashboardContent from "~/components/layouts/dashboard-content.vue";
import DashboardHeader from "~/components/layouts/dashboard-header.vue";
import DashboardSidebar from "~/components/layouts/dashboard-sidebar.vue";
</script>

<template>
  <div class="min-h-screen w-screen">
    <DashboardHeader />

    <div class="flex flex-row h-full">
      <DashboardContent />
      <DashboardSidebar />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
