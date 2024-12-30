# Evaluate a News Article with Natural Language Processing ✈️🚈🚘

## Overview

Theis Final project **Evaluate a News Article with Natural Language Processing** In Udacity , this Web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites.🙎‍♀️🙎‍♂️

Following are the project prerequisites:

Webserver - Node Web application framework for routing - Express Build tool - Webpack. Using webpack, we will set up the app to have dev and prod environments, each with their own set of tools and commands. External script - Service Worker External API - Aylien API Or MeaningCloud Api

## Table of Contents

-[Overview](#overview)

- [Installation](#installation)
- [Usage](#usage)
- [APIs Used](#apis-used)
- [Available Scripts](#available-scripts)
- [Technologies](#technologies)
- [Author](#author)

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://https://github.com/Mohammad-Aljada/Evaluate-a-News-Article-with-NLP.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd evaluate-a-news-article-with-nlp
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

   **Notice that Node.js version is v20.15.1**

4. **Set up environment variables**:
   Create a `.env` file in the root directory and add the following API keys:

   ```
   API_KEY=your_api_key
   Port=5000(for Test Port)
   ```

   \*\*Note : Test And Server Run To Port 5000 or 3000 in Project if First Value Port in `.env` file
   not Available take value seceond in index.js file in folder server.

5. **Build the app for production**:

   ```bash
   npm run build
   ```

6. **Start the server**:

   ```bash
   npm start
   ```

7. **Run in development mode**:
   ```bash
   npm run dev
   ```

## Usage

Once the server is running, open `http://localhost:3000` in your browser to access the Travel Planner app.

1. **Add a Trip**: Enter the destination city and select a travel date, then click on the "Save Trip" button.
2. **View Trip Details**: Your saved trip(s) will be displayed in the "Your Trips" section.
3. **Remove a Trip**: Click the "Remove Trip" button to delete the trip.

## APIs Used

Step 1: Signup for an API key

The following APIs are used in this app:

1. **[Aylien API ](https://aylien.com/product/news-api/)**: Used to NLP FOR Article blogs
2. **[MeaningCloud API ](https://www.meaningcloud.com/developer/sentiment-analysis)**: Once you create an account with MeaningCloud, you will be given a license key to start using the API. This API does not require an SDK, so you can skip ahead to step 4 in the instructions.

Step 2: Install the SDK (Aylien API only)
Next you'll need to get the SDK. SDK stands for Software Development Kit, and SDKs are usually a program that brings together various tools to help you work with a specific technology. SDKs will be available for all the major languages and platforms, for instance the Aylien SDK brings together a bunch of tools and functions that will make it possible to interface with their API from our server and is available for Node, Python, PHP, Go, Ruby and many others. We are going to use the Node one, the page is available here. You get 1000 free requests per day.

For the MeaningCloud API, you may need to install the form-data module to follow its JavaScript example.

Step 3: Require the SDK package
Install the SDK in your project and then we'll be ready to set up your server/index.js file.

Your server index.js file must have these things:

Require the Aylien npm package
var aylien = require("aylien_textapi");
Step 4: Environment Variables
Next we need to declare our API keys, which will look something like this:

// set aylien API credentias
var textapi = new aylien({
application_id: "your-api-id",
application_key: "your-key"
});
...but there's a problem with this. We are about to put our personal API keys into a file, but when we push, this file is going to be available PUBLICLY on Github. Private keys, visible publicly are never a good thing. So, we have to figure out a way to make that not happen. The way we will do that is with environment variables. Environment variables are pretty much like normal variables in that they have a name and hold a value, but these variables only belong to your system and won't be visible when you push to a different environment like Github.

Use npm or yarn to install the dotenv package npm install dotenv. This will allow us to use environment variables we set in a new file
Create a new .env file in the root of your project
Go to your .gitignore file and add .env - this will make sure that we don't push our environment variables to Github! If you forget this step, all of the work we did to protect our API keys was pointless.
Fill the .env file with your API keys like this:
API_ID=************\*\*************
API_KEY=************\*\*************
Add this code to the very top of your server/index.js file:
const dotenv = require('dotenv');
dotenv.config();
Reference variables you created in the .env file by putting process.env in front of it, an example might look like this:
console.log(`Your API key is ${process.env.API_KEY}`);
...Not that you would want to do that. This means that our updated API credential settings will look like this:

// set aylien API credentials
// NOTICE that textapi is the name I used, but it is arbitrary.
// You could call it aylienapi, nlp, or anything else,
// just make sure to make that change universally!
var textapi = new aylien({
application_id: process.env.API_ID,
application_key: process.env.API_KEY
});
Step 5: Using the API
We're ready to go! The API has a lot of different endpoints you can take a look at here. And you can see how using the SDK simplifies the requests we need to make.

I won't provide further examples here, as it's up to you to create the various requests and make sure your server is set up appropriately.

## Available Scripts

- **npm start**: Runs the server in production mode.
- **npm run dev**: Starts the development server with hot reloading.
- **npm run build**: Builds the app for production.
- **npm test**: Runs the test suite using Jest.

## Technologies

- **Node.js**: Backend server.
- **Express.js**: Web framework for Node.js.
- **Webpack**: Module bundler and asset pipeline.
- **Babel**: Transpiling ES6+ JavaScript code.
- **Sass**: CSS preprocessor for styling.
- **Jest**: JavaScript testing framework.

## Author

Mohammad Aljada
