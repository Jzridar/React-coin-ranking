# REACT-COIN-RANKING-PROJECT 

[GIT Link](https://github.com/Jzridar/React-coin-ranking)

[LIVE Link](https://coin-ranking-jzridar.onrender.com)



**ABOUT:** 

This project is created to fetch API data for cryptocoins.

**TECHNOLOGIES USED:**

HTML,JAVASCRIPT,CSS,REACT,API

**HOW I BUILT THIS:**

#Created basic React app using Create-React-App.

**Installed some dependencies like:**

1. Antdesign using " npm install antd @ant-design/icons"[link](https://ant.design/docs/react/introduce) for designing/styling

2. Redux using "npm install react-redux @redux.js/toolkit"
Redux using "npm install @redux.js/toolkit"

3. Axios to make API requests using "npm install axios chart.js" to create charts

4. Using "npm install html-react-parser" to parse some html data

5. Using "npm install millify" to transform large numbers to readable string

6. Using "npm install moment" to parse times and dates

7. Using "npm install react-chartjs-2" to render the charts from chart js in our ract app

**STEPS:**

I have started by creating a basic index.html and index.js files.

Next I have created 3 divs for navbar,main and footer to fetch the respective components later

To differentiate the basic js files from components I've saved the components as ".jsx"

I've created an index.js file to keep all the components inside and exported them to get imported in app.js.This way reduces considerable number of lines that we use to import components.Using this we can import any number of somponents in a single line


**Navbar component:**

Inside the navbar component I've added the logoimage and Added two icons inside the "antd menu component" and linked those two homepage and cryptocurrencies component.I've imported the Navbar component into app.js to put it inside the navbar div. 

**Homepage component:**

In the homepage i'm fetching data inside the use effect on the component render. getting the cpoin stats and setting it to worldwidecryptostats and displaying them using rows,columns and millify,also calling the cryptocurrencies component to display the top 10 cryptos in the homepage by giving a property called simplified for the cryptocurrency component
also I'm giving an options to look for more than 10 coins by linking cryptocurrencies component to the showmore title

**Cryptocurrency Component:** 

Here i'm fetching data inside the use effect on the page load or when the searchterm value change.one use state for coins and another one is for search coin by its name.I'm checking if simplified is true to load 10 records if not it will display 100 records.
The searchterm input box takes the user input and update the setsearchterm usestate method to update the searchterm state,this will trigger the use effect method to filter the coins that cointains the search letters and call the setCoins function to update new coins state.Using the row and column property I'm displaying the cards by mapping them.Linking wach card by their id and by using the card component from ant d displaying the currency details on each cards


**cryptoApi.js:**

Here's where I'm fetching the data using the API endpoint code given in the coin ranking website by using the axios library inside the getcrypto method.This will return the axios response object as a promise

**App.js file:**

After adding the Navabar in the App.js file,I've started creating the routes inside the main div using the layout component from antd.Inside that I have routed the homepage and the cryptocurrencies page

In the footer section Ive added the link to homepage and the cryptocurrencies page for easy navigation

**App.css,Ant-design:**
Main designs are done using ant-design components ,Did some basic designing using CSS.





SPECIAL THANKS TO:
Rapid API, 
[CoinRanking.com](https://rapidapi.com/Coinranking/api/coinranking1/details),
[Youtube](https://www.youtube.com/watch?v=9DDX3US3kss)



















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
# coin-ranking
