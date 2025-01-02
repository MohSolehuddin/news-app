# News App

## Overview

This project is built using React Native for mobile application development. The app provides the latest news and user can filter by categories.

## Installation

Follow these steps to set up the project on your local computer:

### Prerequisites

- Node.js and npm installed on your system.

### Steps

1. Clone the repository:

   ```bash
   git clone git@github.com:MohSolehuddin/news-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd news-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env.local` file for your environment variables:

   ```
   touch .env.local
   ```

5. Add your environment variables to `.env.local` (e.g., API keys):

   ```env
   EXPO_PUBLIC_API_URL=https://newsapi.org/v2
   EXPO_PUBLIC_API_KEY=your_api_key_here
   ```

6. Start the development server:
   ```bash
   npm start
   ```

## Features

- Fetches the latest news from an API.
- Filtering sources by categories
- Automatically fetching API if user scroll to bottom

## Technologies Used

- React Native
- Expo
- Axios (for API requests)
- NativeWind (for styling)
- Redux Toolkit (for state management)
