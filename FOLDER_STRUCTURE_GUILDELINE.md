# Folder structure guideline

## Public

**Purpose:** 
Contains static assets that will be served directly by the web server. This typically includes the main index.html file and any other static files such as images, fonts, or favicons.

**Common Files:** 
- index.html
- favicon.ico

**/src**

**Purpose:** 
Contains all the source code for the application. This is where you will place your React components, styles, assets, and other application-specific files.

**Subfolders Files:** 

# /assets 

**Purpose:** 
Stores static assets like images, fonts, or other media files used by the components.

**Example Files:** 
- logo.svg

# /components 

**Purpose:** 
 Contains reusable React components. Each component should have its own file.

**Example Files:** 
- About.jsx
- Contact.jsx
- Footer.jsx
- Helper.jsx
- HeroSection.jsx

# /views 

**Purpose:** 
Contains the main view components or pages of the application. Each view represents a distinct page or route in the application.

**Example Files:** 
- HomePage.jsx
- AboutPage.jsx
- ContactPage.jsx

## Common Files in /src

# App.css

**Purpose:** 
Contains the main application-wide styles.

# App.js

**Purpose:** 
The root component of the application.

# index.css

**Purpose:** 
Global styles for the application.

# index.js

**Purpose:** 
The entry point of the application where the React app is rendered to the DOM.

# reportWebVitals.js

**Purpose:** 
Used for measuring performance in the app.

# setupTests.js

**Purpose:** 
Configures the testing environment.