# Melodyverse


```markdown
# MelodyVerse Frontend

MelodyVerse is a sleek, responsive web application for a fictional music streaming service. Built with React.js and Tailwind CSS, it features secure user authentication with signup and login screens.

## Features

- User Registration and Authentication
- Responsive Design with Tailwind CSS
- Accessibility Enhancements

## Prerequisites

- Node.js (v14.x or higher)
- npm (v6.x or higher)

## Project Setup

### Frontend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/suryasivakumar22/MELODYVERSE-USING-REACT-FRONTEND-API.git
   cd MELODYVERSE-USING-REACT-FRONTEND-API
   ```

2. Install frontend dependencies:
   ```bash
   cd client
   npm install
   ```

3. Create a `tailwind.config.js` file in the `client` directory:
   ```js
   module.exports = {
     purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
     darkMode: false, // or 'media' or 'class'
     theme: {
       extend: {},
     },
     variants: {
       extend: {},
     },
     plugins: [],
   };
   ```

4. Create a `postcss.config.js` file in the `client` directory:
   ```js
   module.exports = {
     plugins: {
       tailwindcss: {},
       autoprefixer: {},
     },
   };
   ```

5. Create a `src/globals.css` file and add Tailwind imports:
   ```css
   @import 'tailwindcss/base';
   @import 'tailwindcss/components';
   @import 'tailwindcss/utilities';

   :root {
     --font-heading: 'Manrope', sans-serif;
     --font-body: 'Manrope', sans-serif;
   }

   body {
     font-family: var(--font-body);
   }

   .antialiased {
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
   }

   .font-heading {
     font-family: var(--font-heading);
   }

   .font-body {
     font-family: var(--font-body);
   }
   ```

6. Start the frontend development server:
   ```bash
   npm start
   ```

## Running the Application

1. Ensure the backend server is running (refer to the backend setup in the main repository README if needed).

2. Run the frontend development server:
   ```bash
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000` to view the application.
