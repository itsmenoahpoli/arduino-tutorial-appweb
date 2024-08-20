import { defineStore } from "pinia";

type LayoutState = {
  sidebarWidth: number;
  sidebarCollapsed: boolean;
};

export const useLayoutStore = defineStore("layout-store", {
  state: () => {
    return {
      sidebarWidth: 300,
      sidebarCollapsed: false,
    } as LayoutState;
  },
  actions: {
    CLEAR_AUTH() {
      this.$reset();
    },
  },
  persist: true,
});
