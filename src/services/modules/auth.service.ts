import { BaseService } from "./../base.service";
import { useAuthStore } from "~/store";
import { HTTP_STATTUS_CODE } from "~/constants";
import type { Credentials } from "~/types/auth";

export class AuthService extends BaseService {
  public async authenticateCredentials(credentials: Credentials) {
    try {
      const response = await this.http.post("/auth/login", credentials);
      const { SET_USER, SET_TOKEN } = useAuthStore();
      const { user, token } = response.data;

      SET_USER(user);
      SET_TOKEN(token);

      window.location.href = "/dashboard";
    } catch (error) {
      this.handleError(error);
    }
  }

  public async requestOTP(email: string) {
    try {
      const response = await this.http.post("/auth/request-otp", { email });

      if (response.status === HTTP_STATTUS_CODE.OK) {
        console.log("otp requested");
      }
    } catch (error) {
      this.handleError(error);
    }
  }
}
