import { TwitterApiTokens } from "twitter-api-v2";

import * as dotenv from "dotenv";
dotenv.config();

export const tokens: TwitterApiTokens = {
  appKey: process.env.CONSUMER_KEY as string,
  appSecret: process.env.CONSUMER_SECRET as string,
  accessToken: process.env.ACCESS_TOKEN,
  accessSecret: process.env.ACCESS_TOKEN_SECRET,
};
