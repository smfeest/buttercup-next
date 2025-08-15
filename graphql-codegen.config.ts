import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: process.env.GRAPHQL_ENDPOINT,
  documents: ["src/app/**/*.{ts,tsx}"],
  ignoreNoDocuments: true,
  generates: {
    "./src/api/graphql/": {
      preset: "client",
      config: {
        scalars: {
          Long: "number",
        },
      },
    },
  },
};

export default config;
