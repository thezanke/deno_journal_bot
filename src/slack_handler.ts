import { Status } from "https://deno.land/std/http/mod.ts";
import { ApiContext, Handler } from "./imports/deno_json_api.ts";

export class SlackHandler implements Handler {
  async handler({ request }: ApiContext) {
    if (request.url === "/hello") {
      return {
        status: Status.OK,
        body: { message: "hello world" },
      };
    }
  }
}
