export interface SlackMessageDto {
  readonly token: string;
  readonly teamId: string;
  readonly teamDomain: string;
  readonly channelId: string;
  readonly channelName: string;
  readonly userId: string;
  readonly userName: string;
  readonly command: string;
  readonly text: string;
  readonly responseUrl: string;
  readonly triggerId: string;
}

export const createSlackMessageDto = (body: {
  [key: string]: string;
}): SlackMessageDto => {
  return {
    token: body.token,
    teamId: body.team_id,
    teamDomain: body.team_domain,
    channelId: body.channel_id,
    channelName: body.channel_name,
    userId: body.user_id,
    userName: body.user_name,
    command: body.command,
    text: body.text,
    responseUrl: body.response_url,
    triggerId: body.trigger_id,
  };
};
