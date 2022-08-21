const Employee = require("../lib/Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email);

        if(typeof officeNum !== 'number' || officeNum === null) {
            throw new Error("Expected parameter 'officeNum' to be a number")
        }

        this.officeNum = officeNum;
    }

    getRole() {
        return 'Manager';
    }

    getOfficeNum() {
        return this.officeNum;
    }
}

module.exports = Manager;