import { defineStore } from "pinia";

type AuthState = {
  user?: any;
  token?: string;
};

export const useAuthStore = defineStore("auth-store", {
  state: () => {
    return {
      user: undefined,
      token: undefined,
    } as AuthState;
  },
  actions: {
    SET_USER(user: AuthState["user"]) {
      this.user = user;
    },
    SET_TOKEN(token: AuthState["token"]) {
      this.token = token;
    },
    CLEAR_AUTH() {
      this.$reset();
    },
  },
  persist: true,
});
