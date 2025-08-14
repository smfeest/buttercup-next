declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GRAPHQL_ENDPOINT: string;
    }
  }
}

export {};
