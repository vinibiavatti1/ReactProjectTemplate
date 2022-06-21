# React Project Template

The purpose of this repository is to facilitate the React project creation, giving useful resources and a feature based organization. Different of [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html), the focus of this boilerplate is to give the opportunity to clone this repository and start coding without spending some time to configure linters and other libraries.

This project was made keeping in mind that the [VSCode](https://code.visualstudio.com/) IDE will be used for the development.

## Features

This template offers built-in useful features that are used commonly in WEB projects. The features available for this projects are:

-   Linting and Formatting
    -   [ESlint](https://eslint.org/)
    -   [Prettier](https://prettier.io/)
    -   [EditorConfig](https://editorconfig.org/)
    -   [React Hooks Linter](https://www.npmjs.com/package/eslint-plugin-react-hooks)
    -   [Typescript ESlint](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
-   Environment
    -   [Dotenv](https://www.npmjs.com/package/dotenv)
    -   [EnvCMD](https://www.npmjs.com/package/env-cmd)
-   Testing
    -   [Jest](https://jestjs.io/docs/tutorial-react)
-   Typing
    -   [Typescript](https://www.typescriptlang.org/)
-   Internationalization
    -   [I18next](https://react.i18next.com/)
-   Analytics
    -   [Web Vitals](https://create-react-app.dev/docs/measuring-performance/)
-   Scripts
    -   [PowerShell Util Scripts](https://docs.microsoft.com/pt-pt/powershell/)

## Recommended VSCode Extensions

The list below set the recommended extensions to ensure all configurations of the project to work fine. Note that these extensions are configured inside `.vscode/extensions.json` for automatic recommendation after open the IDE.

-   [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) `editorconfig.editorconfig`
-   [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) `dbaeumer.vscode-eslint`
-   [Prettier - Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) `esbenp.prettier-vscode`
-   [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv) `mikestead.dotenv`

## Organization

The project is organized based on the component features, in which each feature has it's module with specific components. For the shared components, the shared folder is available. Other concepts like APIs, Services, Utils, are available in this template.

The table below shows the resources in project root:

| File/Folder        | Description                                                         |
| ------------------ | ------------------------------------------------------------------- |
| `.vscode`          | VSCode default project configuration                                |
| `/public`          | Public app resources and translation files for internationalization |
| `/scripts`         | Powershell util scripts                                             |
| `/src`             | Source code                                                         |
| `.editorconfig`    | Editor Config configuration file                                    |
| `.env.development` | Development environment variables                                   |
| `.env.production`  | Production environment variables                                    |
| `.env.staging`     | Staging environment variables                                       |
| `.env.test`        | Test environment variables                                          |
| `.eslintrc`        | ESLint configuration file                                           |
| `.gitignore`       | Git ignore resources                                                |
| `.prettierrc`      | Prettier configuration file                                         |
| `package.json`     | NPM configuration file                                              |
| `tsconfig.json`    | Typescript configuration file                                       |

## Source Files Organization

The organization for `src` folder was made divided by concept, where each folder represents for some specific WEB development concept.

| File/Folder          | Description                                        |
| -------------------- | -------------------------------------------------- |
| `/components`        | React components/modules                           |
| `/constants`         | Application constants                              |
| `/contexts`          | React contexts                                     |
| `/enums`             | Enumerations                                       |
| `/errors`            | App exception classes                              |
| `/hooks`             | React custom hooks                                 |
| `/models`            | Model classes                                      |
| `/reducers`          | React reducers                                     |
| `/services`          | Service modules that integrate with backend API    |
| `/utils`             | Utility classes                                    |
| `index.css`          | Global application CSS style                       |
| `index.tsx`          | React entry-point                                  |
| `react-app-env.d.ts` | React typescript configuration                     |
| `setup.ts`           | Setup function that execute when application loads |
| `setupTests.ts`      | Setup for Jest tests                               |

## React Components

Inside the `/components` folder, we can find some folders that represent a specific React resource. The project component structure uses feature division to identify specific components for determined feature. Also, the structural components (layout components) can be find here.

| File/Folder    | Description                                                      |
| -------------- | ---------------------------------------------------------------- |
| `/layouts`     | Application layout components (Header, Main, Footer and Layout)  |
| `/modules`     | Feature components (Pages and specific components for each page) |
| `/shared`      | Shared components                                                |
| `App.css`      | App component style                                              |
| `App.test.tsx` | App component test                                               |
| `App.tsx`      | App component configuration                                      |

## Internationalization

The library [i18next](https://react.i18next.com/) is used set the project as multi-cultural. It uses JSON message files to render messages in the components by the locale of the user.

The configuration of this lib can be found at `setup.ts` file.

To start using the internationalization, you must define the message for each language that the app supports in the locale files. These files are located in `/public/locales` folder.

```
/public
    /locales
        /en
            translation.json
        /pt
            translation.json
    ...
```

To add a new translation, we just need to add this message to the `translation.json` file. After this, to use the translation we can use the `useTranslation` hook provided by the library.

```typescript
const [t, i18n] = useTranslation()
const localeMessage = t('my.message')
```

| Variable | Description                                                                                      |
| -------- | ------------------------------------------------------------------------------------------------ |
| `t`      | Function that can be used to get the message in the `transaltion.json` file                      |
| `i18n`   | Instance with the library properties, such as the current language, and other utility functions. |

## Reducers

The `/reducers` folder store the reducer functions that application uses. These function should be used by `useReducer()` React hook. Each reducer has three files:

| File                     | Description                                            |
| ------------------------ | ------------------------------------------------------ |
| `reducer.ts`             | Reducer function that is used into `useReducer()` hook |
| `reducerActions.ts`      | Reducer action type enumeration                        |
| `reducerInitialState.ts` | Initial state that is passed to `useReducer()` hook    |

## Environment

To use specific variables depending the environment that app is running on, the lib `Dotenv` was used. This lib provides the `.env` files to configure the variables for each environment. These variables can be accessed using `process.env.<variable_name>`. Some environment variables are defined in `Constants.ts` file for usage.

> Note: To ensure that React will load the environment variables, these variables must start with `REACT_APP` prefix.

## Build

There are two commands for building the application: `build:staging` and `build:production`. The routine that will be executed for each build is the same, but the difference is the `.env` file that will be used. This responsible library for selecting the correct `.env` file is `env-cmd`.

## Scripts

The project gives some PowerShell scripts that can be used to execute common project commands, like build, start, serve, etc. You can also use the script `run_code.ps1` to open the VSCode in the project context.

> Note: The serve command can be executed only if the serve tool is present in the environment of the application, otherwise the command will fail. The serve tool is used to host the application into a server. It can be used to host the application for staging or production environments.

## Linters

TO DO
