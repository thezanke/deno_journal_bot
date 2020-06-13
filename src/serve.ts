import { JsonApi } from "./imports/deno_json_api.ts";
import { SlackHandler } from "./slack_handler.ts";
import { SlackService } from "./slack_service.ts";

const port = 8000;
const api = new JsonApi({ port });

const slackService = new SlackService(api);
api.addHandler(new SlackHandler(slackService));

console.log(`listening on ${port}`)
await api.start();
