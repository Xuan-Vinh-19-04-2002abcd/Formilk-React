## Requirements

Do validation on the login form based on the following criteria:

- For the email field:
  - Show error message: "This is required field" if the user does not enter the email.
  - Show error message: "The email format is not valid" if the user enters the wrong email format.
- For the password field:
  - Show error message: "This is required field" if the user does not enter the password.
  - Show error message: "The password should be greater than 8 characters" if the user enters less than 8 characters.
  - The password field should contain at least one letter, one number, and one special character. If not, it should show the message: "The password format is not valid".
- Only show an error message if the field has an error and the user has touched on it.
- Change the input border color to red when a field has an error and the user has touched on that.
- Should disable the submit button while the form has an error or after the user clicks on submit button.
- Show an alert window to display login info when the user clicks on submit button.

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
