# React + Redux + TypeScript + RTKQuery + PrimeReact + Vite Template

This is a frontend template that uses React, Redux, TypeScript, RTKQuery, PrimeReact, Tailwind and Vite.

## Install Packages

`npm i`

## Run the App

`npm run dev`

## Set up Prettier in VS Code

It is highly recommended to use prettier when written React code. It help format the code and standardize the code format quickly.

1. Ctrl + shift + p
2. Select `Preference: Open User Settings (JSON)`
3. add the following 2 properties

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

## Coding Styles Guidelines

1. Slices should be splitted by features or by api endpoint
2. Only reusable components should be placed in `src/components`, page specific components should be placed in `src/pages/page`
3. New route should be added in `src/app/router.tsx` as children of the root route
4. Use RTK Query fo api slices and redux toolkit for local slices. (See `src/slices/sampleAPISlice.ts` and `src/slices/counterSlice.ts`)
5. `src/fixtures` can be used as fake data for testing before connecting to real backend api endpoints.
