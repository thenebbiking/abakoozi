# Getting Started with Abakoozi :)

| Information |     |
| :---------- | :-: |

Welcome to Abakoozi. A new and improved Tretton37 ninja listing. Designed to be robust and easy to use with features such as pagination. (Yeah you read that right), filtering by ninja office location, and ninja search<br><br>

# Rationale and Design.

Tretton37 requires a new modern and simple ninja listing for all its amazing staff.
To accomplish this task, I decided to use React as the front end UI library. This decision was made because of the robustness of React in quickly building and bootstrapping front end applications.

Some libraries I opted for include:

- Axios for data fetching. This makes it easy to fetch data from other resources
- Redux for state management. This allows us to persist state and easily use this state across our components.
- Docker for a production build and ready instance. This makes portability of our app easy.

# Stories Chosen.

I choose the following stories because I believed they'd show case some of skill sets and understandings of JavasScript quite well.

1.  \_functionality

    - Filter by name and office
    - Sort by name and office

2.  \_design/accessibility

    - Fancy animations - Just a tad bit on the profile images
    - Responsive design

3.  \_testing/QA
    - Works in Chrome, Firefox, Edge

# Installation

## Development

In the project directory, you can run:

### `yarn start or npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Deployment to production

In the project directory, you can run:

### `yarn start prod or npm start prod`

This spins up a docker container running with a production build of the app
