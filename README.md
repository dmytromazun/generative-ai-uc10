# generative-ai-uc10

#### Project description

This App is a React.js application that utilizes the create-react-app framework to provide a simple yet powerful regular expression validation feature. The app includes two key functions, regexValidation, and testRegexValidation. The regexValidation function is designed to check user input against a predefined regular expression pattern to ensure it meets specific criteria, such as uppercase, lowercase, special character, and digit requirements. On the other hand, the testRegexValidation function is responsible for rigorously testing the regexValidation function with a variety of sample inputs and edge cases, ensuring robustness and accuracy. This tool allows developers to easily implement and validate complex input restrictions, providing a more secure and user-friendly experience for their React applications.

#### Regex implementation description

- The regex starts with ^, indicating that the input string must start at the beginning.
- (?=.\_[A-Z]) asserts that there must be at least one uppercase letter in the input string.
- (?=.\_[a-z]) asserts that there must be at least one lowercase letter in the input string.
- (?=.\_[0-9]) asserts that there must be at least one digit in the input string.
- (?=.\_[!"#$%&\'()\*+,-./:;<=>?@[\\]^\_{|}~])` asserts that there must be at least one special character in the input string. The special characters are listed between the square brackets.
- [^\\s] is a negative character class that ensures there are no whitespace characters in the input string.
- {1, maxLength} specifies the minimum and maximum length of the input string, where maxLength is a variable representing the maximum allowed length.

In summary, this regular expression enforces the following rules for input validation:

- The input must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.
- It cannot contain any whitespace characters.
- The length of the input string must be between 1 and the value specified by the maxLength variable.

This regex is particularly useful for implementing strong password requirements or validating sensitive user data in a secure and reliable manner within React.js applications.

#### Installation and scripts

Prerequisites:
Make sure you are using Node v18.

#### Running the project locally:

1. Clone the repository
2. Navigate to the my-app directory
3. Install dependencies: `npm i`
4. Start the app: `npm start`
5. The app should be available at http://localhost:3000
6. Test results will be shown in a console of your browser
