import { Status } from "https://deno.land/std/http/mod.ts";
import {
  ApiContext,
  Handler,
} from "https://raw.githubusercontent.com/thezanke/deno_json_api/develop/src/mod.ts";

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
