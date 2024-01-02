# Test-Driven-Development-Team-Profile-Generator

## Description
Team Profile Generator is a Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person. This tool helps managers to quickly access team members' emails and GitHub profiles.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Tests](#tests)
- [Languages](#languages)
- [Screenshot](#screenshot)
- [License](#license)


## Installation
To install the necessary dependencies, run the following command: npm install or npm i.

## Usage
To use this application, run the following command: node index.js

Follow the prompts to enter the team manager's name, employee ID, email address, and office number. After adding the manager, you will have the option to add engineers and interns with their respective details.

Once you have finished building your team, the application will generate an index.html file in the output directory, which will display your team roster based on the information provided.

## Features
- Command-line interface using Inquirer for collecting user input.
- Classes for Manager, Engineer, and Intern, extending a base class of Employee.
- Unit tests for each class using Jest.
- Dynamic HTML generation based on team member information.
- Validation for user input to ensure data integrity.

## Tests
To run tests, use the following command: npm run test

## Languages 

Javascript is the main Language in which all of the code is written for this project.

## Screenshot
![Html View](/Assets/Images/HTML.png)

## License
This project is licensed under the MIT License.