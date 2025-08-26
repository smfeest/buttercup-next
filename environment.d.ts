declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APP_INSIGHTS_CONNECTION_STRING: string;
    }
  }
}

export {};
