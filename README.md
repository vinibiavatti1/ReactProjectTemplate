# React Project Template

The purpose of this repository is to facilitate the React project creation, giving useful resources and a feature based organization. Different of `create-react-app`, the focus of this boilerplate is to give the opportunity to clone this repository and start coding without spending some time to configure linters and other libraries.

## Features

This template offers built-in useful features that are used commonly in WEB projects. The features available for this projects are:

-   Linting and Formatting
    -   ESlint
    -   Prettier
    -   EditorConfig
    -   React Hooks Linter
-   Environment
    -   Dotenv
    -   EnvCMD
-   Testing
    -   Jest
-   Typing
    -   Typescript
-   Internationalization
    -   I18next
-   Analytics
    -   Web Vitals
-   Scripts
    -   PowerShell Util Scripts

## Recommended VSCode Extensions

The list below set the recommended extensions to ensure all configurations of the project to work fine. Note that these extensions are configured inside `.vscode/extensions.json` for automatic recommendation after open the IDE.

-   Editor Config `editorconfig.editorconfig`
-   ESLint `dbaeumer.vscode-eslint`
-   Prettier `esbenp.prettier-vscode`
-   Dotenv `mikestead.dotenv`

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

## Environment

To use specific variables depending the environment that app is running on, the lib `Dotenv` was used. This lib provides the `.env` files to configure the variables for each environment. These variables can be accessed using `process.env.<variable_name>`

> Note: To ensure that React will load the environment variables, these variables must start with `REACT_APP` prefix.

## Build

There are two commands for building the application: `build:staging` and `build:production`. The routine that will be executed for each build is the same, but the difference is the `.env` file that will be used. This responsible library for selecting the correct `.env` file is `env-cmd`.

## Scripts

The project gives some PowerShell scripts that can be used to execute common project commands, like build, start, serve, etc. You can also use the script `run_code.ps1` to open the VSCode in the project context.

> Note: The serve command can be executed only if the serve tool is present in the environment of the application, otherwise the command will fail. The serve tool is used to host the application into a server. It can be used to host the application for staging or production environments.

## Linters

TO DO
