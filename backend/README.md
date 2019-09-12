# ExpressJS starter with ts-jest

This a minimal ExpressJS application written in TypeScript. It uses [ts-jest](https://github.com/kulshekhar/ts-jest) TypeScript preprocessor with source map support for Jest that lets you use [Jest](https://jestjs.io/) to test projects written in TypeScript.

## Project structure

```md
.
├── Dockerfile
├── README.md
├── jest.config.js
├── package-lock.json
├── package.json
├── src
│   ├── app.ts
│   ├── controllers
│   │   └── user.controller.ts
│   ├── interfaces
│   │   └── IUser.ts
│   ├── models
│   │   └── User.ts
│   ├── server.ts
│   └── tsconfig.json
├── tests
│   ├── app.test.ts
│   └── tsconfig.json
└── tsconfig.json
```

### Getting started on Docker

#### Build image:

```bash
docker build --tag express-starter .
```

#### Launch a container using the image.
This Express app listens on `PORT` 3000 by default.

```bash
docker run --name express-starter --publish 3000:3000 express-starter
```

It is possible to supply `PORT` as an environment variable and publish the port like so:

```bash
docker run --name express-starter --env PORT=4000 --publish 4000:4000 express-starter
```

Launch container with hot reloading, *i.e.*, use `nodemon` to watch file changes; whenever files are modified server is restarted.

```bash
docker run --name express-starter -v ${PWD}/src:/app/src --publish 3000:3000 express-starter sh -c "npm run watch-ts"
```
#### Run tests
Run tests with `ts-jest` when the docker is down
```bash
docker run --name express-starter express-starter sh -c "npm run test"
```

Run tests on running docker container by executing the following command in the root repo of your project.
```bash
npm run test
```

#### Stop docker
Run the following command to stop running container:
```bash
docker stop express-starter
```
Run the following command to remove container:
```bash
docker rm express-starter
```
Run the following command to remove image:
```bash
docker rmi express-starter
```
