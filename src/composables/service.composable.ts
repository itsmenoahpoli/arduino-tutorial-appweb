import { AuthService } from "~/services/modules/auth.service";

export const useServices = () => {
  return {
    authService: new AuthService(),
  };
};
