import { ApiContext, Handler } from "./imports/deno_json_api.ts";
import { createSlackMessageDto } from "./slack_message_dto.ts";
import { SlackService } from "./slack_service.ts";

export class SlackHandler implements Handler {
  constructor(private readonly slackService: SlackService) {}
  async handler({ request, body }: ApiContext) {
    if (request.url === "/slack") {
      const dto = createSlackMessageDto(body);
      return this.slackService.handleCommand(dto);
    }
  }
}
