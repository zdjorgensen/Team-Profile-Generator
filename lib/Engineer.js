const Employee = require("../lib/Employee");

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);


        if(typeof gitHub !== 'string' || !gitHub.trim().length) {
            throw new Error("Expected parameter 'gitHub' to be a non-empty string")
        }

        this.gitHub = gitHub;
    }

    getGitHub() {
        return this.gitHub;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;

