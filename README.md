# singh-security-2022

Singh Security UI with typescript react redux-toolkit redux-saga

# Tech Stack -

1. UI - React, redux-toolkit, redux-saga, typescript
2. Css - styled-components , material UI
3. Code Formatter - Prettier
4. Code bug finder - ESlint or Typescript (tslint)
5. Unit Testing - jest, react-testing
6. Backend - Node api
7. Database - MongoDB

# Project Setup -

1. Install Node.js and npm
2. Create the project -
   mkdir singh-security-2022
   cd singh-security-2022
   npm init
3. npm i --save-dev typescript
4. Install webpack, plugins and loaders -

   # typescript

   npm i --save-dev typescript
   npm install ts-loader --save-dev

   # webpack

   npm install --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin

   # react @reduxjs/toolkit redux-saga

   npm install -S react react-dom react-redux @reduxjs/toolkit redux-saga
   npm install -D @types/jest @types/node @types/react @types/react-dom @types/react-redux

   # react-router-dom react-router-redux@next

   npm i -S react-redux react-router-dom react-router-redux@next
   npm i -D @types/react-redux @types/react-router-dom @types/react-router-redux

5. Create tsconfig.json
6. Create webpack.config.js
7. Add scripts to package.json
8. Create index.html template
9. install - npm i react react-router-dom redux redux-saga react-dom
10. install - npm i --save-dev @types/react @types/react-router-dom @types/react-dom
11. Create src/index.tsx
12. Run dev server - npm start
13. Build your app for production - npm run build
    npx serve dist - to run prod version

14. Add pollyfills for old browsers
    -- npm i core-js raf whatwg-fetch
15. storybook ✅

- via npx sb init --builder webpack5 ✅

16. jest + react-test-library ✅

- 100% coverage and pass limits ✅
- html coverage report ✅

17. lint-staged 👇

- ensure tests are run, but only on changed files ✅
- eslint fix ✅
- prettier format ✅
- commit lint 👈

# --------- Happy Coding ---------

# Extensions:-

https://blog.logrocket.com/9-essential-vs-code-extensions-typescript/

1. npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint typescript
   ---npm init @eslint/config
2. TypeScript Toolbox
3. TypeScript Importer
4. ponicode
5. codemetrics
6. Better Comments
7. Tabnine AI Autocomplete
8. GitLens
9. prettier in project - npm install prettier -D --save-exact
