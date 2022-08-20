const Employee = require("../lib/Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email);

        if(typeof officeNum !== 'string' || !officeNum.trim().length) {
            throw new Error("Expected parameter 'officeNum' to be a non-empty string")
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