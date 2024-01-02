// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        // Call the parent class constructor with the Employee properties
        super(name, id, email);

        // Engineer-specific property
        this.github = github;
    }

    // Returns the GitHub username
    getGithub() {
        return this.github;
    }

    // Overridden to return 'Engineer'
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;