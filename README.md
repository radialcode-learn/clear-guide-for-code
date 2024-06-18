Steps to install tailwind

1. npm install -D tailwindcss

2. npx tailwindcss init

3. /** @type {import('tailwindcss').Config} \*/
   module.exports = {
   content: [
   "./src/**/\*.{js,jsx,ts,tsx}",
   ],
   theme: {
   extend: {},
   },
   plugins: [],
   }

4. Add this is CSS file
   @tailwind base;
   @tailwind components;
   @tailwind utilities;

5. npm run start
