# Hi!

This project was made as an recruitment assignment for [Omni Calculator](https://www.omnicalculator.com/).

## Stack

- **React**
- **TypeScript**
- **Next.js** - I've chosen it because of its out-of-the-box routing and SSR features
- **GraphQL / Apollo** - I had not tried GraphQL before, so I've decided to use this task as an opportunity to learn it
- **Material UI** - It allowed me to use more time to learn GraphQL, without worrying about the project's design

## Known Issues / Future Improvements

- **Total number of results in Pagination not displaying properly** - I didn't manage to find information about total results in the API, I mocked this value for now.
- **One of items in table is repeated** - API returns two different records with the same id (110), which confuses Apollo cache and the first item overrides the second.
- **Replace imgs with Next Images** - it requires a bit of configuration for Next Images to work with MUI ImageList, but it should improve the performance
- **Apollo cache configuration** - sometimes it doesn't behave as expected, I need to investigate
- **Poor test coverage** - not all the major functionalities are well tested, especially pages
- **End-to-end tests** - it would me nice to implement e2e tests with Cypress

## How to run

Install packages:

```bash
npm i
```

Run:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Run tests:

```bash
npm run test
```

Run linter:

```bash
npm run lint
```
