declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GRAPHQL_ENDPOINT: string;
      SESSION_ENCRYPTION_KEY: string;
    }
  }
}

export {};
