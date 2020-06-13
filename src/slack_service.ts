import { Status } from "https://deno.land/std/http/mod.ts";
import { JsonApi } from "./imports/deno_json_api.ts";
import { SlackMessageDto } from "./slack_message_dto.ts";

export class SlackService {
  constructor(private readonly api: JsonApi) {}
  handleCommand(dto: SlackMessageDto) {
    return {
      status: Status.OK,
      body: { message: "hello world" },
    };
  }
}
