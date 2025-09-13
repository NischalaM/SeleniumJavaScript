
# Selenium Automation Testing with JavaScript

This project is designed for practicing automation testing by implementing Selenium concepts using JavaScript and the Mocha framework. 
It utilizes Allure reports for test reporting and the Chai library for assertions.

## Prerequisites

- Node.js (v14 or above)
- npm (Node Package Manager)
- Google Chrome (or preferred browser)
- Java (for Allure reports)

## Setup

1. Clone the repository:
   ```
git clone <repository-url>
cd <project-folder>
   ```

2. Install dependencies:
   ```
npm install
   ```

## Running Tests

To execute the test suite:
```
npm test
```

To generate Allure reports:
```
npm run allure:generate
```

To open the Allure report in your browser:
```
npm run allure:open
```

## Scripts

- `npm test` - Runs all tests using Mocha.
- `npm run allure:generate` - Generates Allure test reports.
- `npm run allure:open` - Opens the generated Allure report.

## Technologies Used

- JavaScript / TypeScript
- Selenium WebDriver
- Mocha
- Chai
- Allure Reports
```
Replace `<repository-url>` and `<project-folder>` with your actual repository details.