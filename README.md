# Next.js frontend for Buttercup

## Required software

- [Node.js 24](https://nodejs.org) (installation through [Node Version
  Manager](https://github.com/nvm-sh/nvm) is recommended and assumed in instructions below)

## Setting up local secrets

1.  Add an environment variable named `SESSION_ENCRYPTION_KEY` with a randomly generated 32-byte
    base64-encoded value to `.env.local`:

        echo "SESSION_ENCRYPTION_KEY=$(openssl rand -base64 32)" >> .env.local

## Running the app in development

1.  Switch to the required Node.js version

        nvm use

2.  Install node dependencies:

        npm install

3.  Ensure that the backend API server is [running
    locally](https://github.com/smfeest/buttercup/blob/main/README.md#running-the-app):

        dotnet run --project ../buttercup/src/Buttercup.Web

    Or override the `GRAPHQL_ENDPOINT` environment variable locally to specify the URL of the
    desired remote GraphQL endpoint:

        echo "GRAPHQL_ENDPOINT=https://dev.buttercup.doubliez.net/graphql" >> .env.local

4.  Start the development server:

        npm run dev

## Running the end-to-end tests

- To run all tests once:

        npx playwright test

- To run the tests in UI mode:

        npx playwright test --ui

### Notes

- Before running any tests, Playwright will automatically start a specially configured instance of
  the backend API server on http://localhost:5005. However, to save time when repeatedly re-running
  Playwright tests outside of UI mode, it is also possible to start the backend API server manually
  first:

        dotnet run --project ../buttercup/src/Buttercup.Web --environment E2E --urls http://localhost:5005

- End-to-end tests should be designed to clean up any database records they create, even on failure.
  However, if necessary, the database can be deleted, ready to be recreated on the next run:

        cd ../buttercup/src/Buttercup.Web
        DOTNET_ENVIRONMENT=E2E dotnet ef database drop

## Linting

- To lint the TypeScript code:

        npm run lint
