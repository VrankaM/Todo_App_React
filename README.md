# React TodoList App

used technologies:
React, Router, Axios, Redux Toolkit, Material UI  
function components with hooks

## Contents

#### To do list with heading and todos  
  Each todo contains heading, optional text and deadline  
  
  Todos are added via form on Home page 
  
  Home page also displays all todos 
  
  Each todo can be editted, deleted, or marked/unmarked as finished
  
#### Active and Completed pages
  Component RenderTodos fiflters todos based on their status: completed / default
  
#### Todos persistency
  After every action, axios takes care of updating array of objects at mock api, which carries all todos data
  
#### Redux toolkit
  All todos fetched from mock api are stored in a redux store, in an "todos" array. Aray is after actions updated localy first for instant response when deleting, editing or toggling todos
  
  Exception is Adding todos. New todo is first uploaded to mock api, then fetched and stored in redux store. This is because mock api is in charge of id's, which are assigned to every todo. 
  
#### Searching
  All pages have shared Search input. Input, unless empty, is stored in redux store, then todos on every page are filtered, and onli ones that contain search input are rendered.
  
  After pressing Cancel button near the Search input, search string is assign value of "", thus todos are not filtered
  
#### Material UI
  This library takes care of all the design. I prefer minimalistic clean look. For positioning, I have used Containers, Stacks and Boxes.
  
#### Form validaiton
  Form validation is done via Material UI, since it allows us to require an input not to be empty, or limit max number of characters and doesn't allow us to pick date and time from past. Those are the only validations I needed. No other library was necessary


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
