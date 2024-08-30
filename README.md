# Marvel

## Demo 🚀

https://tiagoporto.github.io/marvel

## Project

### Stack 🧰

- [Create React App](https://create-react-app.dev/)
- [React](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [React i18next](https://react.i18next.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Highcharts](https://www.highcharts.com/)
- [MUI](https://mui.com/)

## Development 🛠

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Pre-requirements

- [git](https://git-scm.com/)
- [nvm](https://github.com/nvm-sh/nvm)

### Install node

```bash
nvm install
```

### Install dependencies

```bash
npm install
```

### Create env var

Create `.env` file

```
REACT_APP_PRIV_KEY={privKey}
REACT_APP_PUBLIC_KEY={publicKey}
```

Replace `{privKey}` and `{publicKey}` values by the ones provided by Marvel API, check https://developer.marvel.com/documentation/getting_started for more details.

### Run development server

```bash
npm start
```

## Main Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

### `npm run checks`

Will execute formatting checking, types checking and lint.

## CI

CI checks formatting checking, types checking and lint in every Pull Request.

## CD

Deploy could be triggered manually to GH Pages.

## PS!!!

> The chart requirement was not clear, I've created some kind of mock chart.
