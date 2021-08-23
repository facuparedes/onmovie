# [ONMOVIE](https://onmovie.netlify.app)

[![Netlify Status](https://api.netlify.com/api/v1/badges/79ee7242-fa26-4d8b-b67a-861b77009db8/deploy-status)](https://app.netlify.com/sites/onmovie/deploys)

A beautiful TMDB implementation made with NextJS, Tailwind and Typescript.

This project is just a <ins>demo</ins> app, but can be updated in a future with new features.

This is a Server Side Rendering site, so the requests are made in the server. However, the requests could be moved to future endpoints which must be created in NextJS API folder (which runs ExpressJS).

UI inspired on [Charlie Online Cinema](https://www.behance.net/gallery/109639247/CHARLIE-Online-Cinema)

### Demo

This repo is online [here!](https://onmovie.netlify.app)

![image info](./img/fullpage.png)

## Getting started

### Running locally in development mode

To get started, just clone the repository and run npm install && npm run dev:

```sh
git clone https://github.com/facuparedes/onmovie.git
npm install
npm run dev
```

Note: If you are running on Windows and you have issues with `fsevents`, run install --noptional flag (i.e. npm install --no-optional) which will skip installing fsevents.

### Building and deploying in production

If you wanted to run this site in production, you should install modules then build the site with npm run build and run it with npm start:

#### Linux & MacOS

```sh
npm install
npm run build
npm start
```

#### Windows

```sh
npm install
npm run buildWindows
npm start
```

Note: You should run npm run build again any time you make changes to the site.

## Contributing

Pickit is an open-source project that appreciates all community involvement. To contribute to the project, follow the [contribute guide](/CONTRIBUTING.md).

## Todo

- [x] Homepage
  - [x] Featured movie
  - [x] Trending, discover and top rated movies carousel
- [x] Animations
- [ ] See film's details
  - [ ] Show data (description, images, duration, certifications)
  - [ ] Show trailer
  - [ ] Show actors
- [ ] Add series
- [ ] Search movies and series
- [ ] Accounts
  - [ ] Save favorites
  - [ ] Rate films and series
