const Manager = require("../lib/Manager");

describe("Manager", () => {
    // Test for all use cases when initializing a new Manager object
    describe('Initialization', () => {
        it('should create an object with a name, id, and email, officeNum')
            const Manager = new Manager('Zach', 1, 'z.d.jorgensen@gmail.com', '10');
    
            // Verify that new object has correct properties
            expect(Manager.name).toEqual('Zach');
            expect(Manager.id).toEqual(1);
            expect(Manager.email).toEqual('z.d.jorgensen@gmail.com')
            expect(Manager.officeNum).toEqual('10');
    });

    // Verifies new object has correct paramaters
    it('should throw an error if provided no arguments', () => {
        const cb = () => new Manager();

        const err = new Error("Needs to be passed parameters")
        expect(cb).toThrowError(err);
    });

    // Verifies new object has correct paramaters
    it('should throw an error if not provided a name', () => {
        const cb = () => new Manager(1, 'z.d.jorgensen@gmail.com', '10');

        const err = new Error("Expected parameter 'name'");

        expect(cb).toThrowError(err);
    }); 

    // Verifies new object has correct paramaters
    it('should throw an error if not provided an id', () => {
        const cb = () => new Manager('Zach', 'z.d.jorgensen@gmail.com', '10');

        const err = new Error("Expected parameter 'id'");

        expect(cb).toThrowError(err);
    });

    // Verifies new object has correct paramaters
    it('should throw an error if not provided an email', () => {
        const cb = () => new Manager('Zach', 1, '10');

        const err = new Error("Expected parameter 'email'");

        expect(cb).toThrowError(err);
    });

    // Verifies new object has correct paramaters
    it('should throw an error if not provided an office number', () => {
        const cb = () => new Manager('Zach', 1, 'z.d.jorgensen@gmail.com');

        const err = new Error("Expected parameter 'email'");

        expect(cb).toThrowError(err);
    }); 
});