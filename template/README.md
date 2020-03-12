# @britannica/react-starter

> A set of defaults for Britannica's React apps

## Why?

As we ramp up our development efforts, many new projects are being created that require
frontends. Generally, we've been bootstrapping these frontends using `create-react-app`,
which gives us a great set of tools to build our apps. This project takes `create-react-app`
one step further by adding a set of common dependencies and application structure, 
allowing us to begin developing the features specific to our projects that much faster.

## How to use

1. `git clone git@github.com:britannica/react-starter.git new-project`
1. `cd new-project`
1. `git remote rm origin`
1. `git remote add origin git@github.com:britannica/new-project.git`
1. `git push -u origin master`

*Note: Replace `new-project` with your project directory/repo name*

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
