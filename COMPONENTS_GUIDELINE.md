
# Components Guideline

## Counter Component

**File:** `Counter.js`

**Description:**
The `Counter` component provides a simple counter with increment and decrement functionality. It uses the `useState` hook to manage the state of the count.

**Props:**
None

**State:**
- `count` (number): The current count value.

**Functions:**
- `incrementHandler`: Increments the count by 1.
- `decrementHandler`: Decrements the count by 1.


## UseStateWithArray Component

**File:** `UseStateWithArray.jsx`

**Description:**
The UseStateWithArray component demonstrates managing an array state with the useState hook. It initializes the state with an array of items and provides functionality to add new items to the array.

**Props:**
None

**State:**
- items (array): An array of strings representing items.

**Functions:**
- `addItem: Adds a new item to the items array.

## UseStateWithArrayOfObject Component

**File:** `UseStateWithArrayOfObject.jsx`

**Description:**
The UseStateWithArrayOfObject component demonstrates managing an array of objects with the useState hook. It initializes the state with an array of user objects and provides functionality to add new users to the array.

**Props:**
None

**State:**
- users (array): An array of objects, each representing a user.

**Functions:**
- addUser: Adds a new user to the users array.

## UseStateWithString Component

**File:** `UseStateWithString.jsx`

**Description:**
The UseStateWithString component demonstrates managing a string state with the useState hook. It initializes the state with a string and provides functionality to update the string.

**Props:**
None

**State:**
- name (string): A string value managed by the state.

**Functions:**
- updateName: Updates the name string.


# Utils File

## constants Component

**File:** `constants.js`

**Description:**
The constants.js file is used to store constant values that are used throughout the application. This helps in maintaining consistency and avoiding hardcoding values directly within the components. It is a good practice to define constants in a separate file as it makes the code more maintainable and easier to manage.

**Conventions:**
In JavaScript, the file is named constants.js following the camelCase convention.
In some other programming languages, constants files might be named using an uppercase format.

**Constants:**
- LOGIN_TEXT (string): A string constant for login text.
- CARD_NUMBER (number): A numeric constant representing a card number.
- NAV_SHOW_BOOLEAN (boolean): A boolean constant to control the visibility of navigation.

By defining constants in a separate file, you can easily update values in one place without needing to change multiple files, thereby reducing the risk of errors and improving code maintainability.