declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CONSUMER_KEY: string;
      CONSUMER_SECRET: string;
      ACCESS_TOKEN: string;
      ACCESS_TOKEN_SECRET: string;
      BEARER_TOKEN: string;
    }
  }
}
