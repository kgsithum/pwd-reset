# Password Reset Screen POC

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description

This project is a proof-of-concept (POC) implementation of a basic password reset screen. The goal of the project is to allow users to enter a new password and validate it based on specific constraints. The POC provides a simple interface for users to reset their passwords securely.

## Features

- **Password Validation**: Users can enter a string as their new password, and the system will validate it based on specific rules.
- **Password Constraints**: The password must meet one of two sets of constraints:
  - At least 8 characters, including one number and two special characters.
  - Alternatively, the password can be greater than 15 characters with no restrictions.
- **Reset Button Enablement**: The "Reset" button is enabled or disabled dynamically based on the password's validity. If the new password meets the specified constraints, the "Reset" button becomes active, allowing users to proceed with the password change.

## Technologies Used

- **ReactJS**: The project is built using the React JavaScript library, providing a dynamic user interface and efficient component-based development.
- **TypeScript**: TypeScript is used to add static typing to JavaScript, enhancing code maintainability and reducing errors.
- **ES6**: ES6 features are utilized to write modern JavaScript code for improved readability and maintainability.
- **ESLint**: ESLint is used for static code analysis to enforce consistent code style and identify potential issues.
- **Prettier**: Prettier is used for code formatting to ensure a consistent and neat codebase.
- **Husky**: Husky is used to set up Git hooks, enabling automated pre-commit and pre-push checks for code quality.
- **Jest**: Jest is used as the testing framework to write unit tests and ensure code correctness.

## Installation

Developed using: `React 18.2.0, Node v18.16.0` and `npm 9.5.1`.

To install the project,

Clone the repository and run,

```sh
cd
pwd-reset
npm install
```

Run

```sh
npm start
```

Test Eslint

```
npm run lint
```

Test

```sh
npm run test
```

## Instructions

- Open the url in the browser after runing the `npm start`.
- `http://localhost:3000`
- The password reset screen will be displayed in the bowser.
- There is a demo file ( `PasswordResetApp.mp4` ) available in the `public/demo` directory.

## Demo

![example usage](public/demo/PasswordResetApp.mp4)

## Notes

This POC is designed to demonstrate the functionality of a basic password reset screen and the real-time password validation. For a production-ready implementation, additional features such as backend integration for password storage and user authentication would be necessary.


