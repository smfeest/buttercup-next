# Next.js frontend for Buttercup

## Required software

- [Node.js 22](https://nodejs.org) (installation through [Node Version
  Manager](https://github.com/nvm-sh/nvm) is recommended and assumed in instructions below)

## Running the app in development

1.  Switch to the required Node.js version

        nvm use

2.  Install node dependencies:

        npm install

3.  Ensure that the Buttercup API server is [running
    locally](https://github.com/smfeest/buttercup/blob/main/README.md#running-the-app):

        dotnet run --project ../buttercup/src/Buttercup.Web

    Or override the `GRAPHQL_ENDPOINT` environment variable locally to specify the URL of the
    desired remote GraphQL endpoint:

        echo "GRAPHQL_ENDPOINT=https://dev.buttercup.doubliez.net/graphql" >> .env.local

4.  Start the development server:

        npm run dev

## Running tests

### Unit tests

- To run all unit tests once:

        npx jest

- To run tests for changed files in watch mode:

        npx jest --watch

## Linting

- To lint the TypeScript code:

        npm run lint
