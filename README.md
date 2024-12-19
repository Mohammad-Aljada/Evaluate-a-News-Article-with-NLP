
# Evaluate a News Article with Natural Language Processing ✈️🚈🚘

## Overview

Theis Final project  **Evaluate a News Article with Natural Language Processing** In Udacity , this Web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites.🙎‍♀️🙎‍♂️

Following are the project prerequisites:

Webserver - Node Web application framework for routing - Express Build tool - Webpack. Using webpack, we will set up the app to have dev and prod environments, each with their own set of tools and commands. External script - Service Worker External API - Aylien API 



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
   API_ID=your_api_id 
   API_KEY=your_api_key
   ```

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

The following APIs are used in this app:

1. **[Aylien API ](https://aylien.com/product/news-api/)**: Used to NLP FOR Article blogs 


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

