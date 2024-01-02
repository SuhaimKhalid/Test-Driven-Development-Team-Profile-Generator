// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        // Call the parent class constructor with the Employee properties
        super(name, id, email);

        // Intern-specific property
        this.school = school;
    }

    // Returns the school name
    getSchool() {
        return this.school;
    }

    // Overridden to return 'Intern'
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;