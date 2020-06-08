import { JsonApi } from "https://raw.githubusercontent.com/thezanke/deno_json_api/develop/src/mod.ts";
import { SlackHandler } from "./slack_handler.ts";

const api = new JsonApi({ port: 8000 });

api.addHandler(new SlackHandler());

await api.start();
