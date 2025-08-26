# Next.js frontend for Buttercup

## Required software

- [Node.js 22](https://nodejs.org) (installation through [Node Version
  Manager](https://github.com/nvm-sh/nvm) is recommended and assumed in instructions below)

## Running the app in development

1.  Switch to the required Node.js version

        nvm use

2.  Install node dependencies:

        npm install

3.  Start the development server:

        npm run dev

## Running the end-to-end tests

- To run all tests once:

        npx playwright test

- To run the tests in UI mode:

        npx playwright test --ui

## Linting

- To lint the TypeScript code:

        npm run lint
