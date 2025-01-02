# News App

## Introduction

My name is Moh Solehuddin. I am a Full Stack Developer, but currently, my focus is on Front-End Development (Mobile and Web) using React Native.

## Overview

This project is built using React Native for mobile application development. The app provides the latest news, and users can filter articles by categories.

## Installation

Follow these steps to set up the project on your local computer:

### Prerequisites

- Node.js and npm installed on your system.

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/MohSolehuddin/news-app
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

   ```bash
   touch .env.local
   ```

5. Add your environment variables to `.env.local`:

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
- Filters news sources by categories.
- Automatically fetches additional articles when the user scrolls to the bottom of the list.

## Technologies Used

- React Native
- Expo
- Axios (for API requests)
- NativeWind (for styling)
- Redux Toolkit (for state management)
