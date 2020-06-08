import { JsonApi } from "./imports/deno_json_api.ts";
import { SlackHandler } from "./slack_handler.ts";

const api = new JsonApi({ port: 8000 });
api.addHandler(new SlackHandler());

await api.start();
