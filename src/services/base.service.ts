import { httpClient } from "~/api";

export class BaseService {
  protected get http() {
    return httpClient;
  }

  protected handleError(error: unknown) {
    console.log(error);
  }
}
