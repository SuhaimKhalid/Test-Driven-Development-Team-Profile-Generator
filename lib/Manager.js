// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // Call the parent class constructor with the Employee properties
        super(name, id, email);

        // Manager-specific property
        this.officeNumber = officeNumber;
    }

    // Overridden to return 'Manager'
    getRole() {
        return 'Manager';
    }

    // Optionally, you can add a method to get the office number if needed
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;