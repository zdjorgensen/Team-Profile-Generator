const Manager = require("../lib/Manager");

describe("Manager", () => {
    // Test for all use cases when initializing a new Manager object
    describe('Initialization', () => {
        it('should create an object with a name, id, and email, officeNum', () => {
            const manager = new Manager('Zach', 1, 'z.d.jorgensen@gmail.com', 10);

            // Verify that new object has correct properties
            expect(manager.name).toEqual('Zach');
            expect(manager.id).toEqual(1);
            expect(manager.email).toEqual('z.d.jorgensen@gmail.com')
            expect(manager.officeNum).toEqual(10);
        });

        // Verifies new object has correct paramaters
        it('should throw an error if not provided a name', () => {
            const cb = () => new Manager(1, 'z.d.jorgensen@gmail.com', 10);

            const err = new Error("Expected parameter 'name' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

        // Verifies new object has correct paramaters
        it('should throw an error if not provided an id', () => {
            const cb = () => new Manager('Zach', 'z.d.jorgensen@gmail.com', 10);

            const err = new Error("Expected parameter 'id' to be a number");

            expect(cb).toThrowError(err);
        });

        // Verifies new object has correct paramaters
        it('should throw an error if not provided an email', () => {
            const cb = () => new Manager('Zach', 1, 10);

            const err = new Error("Expected parameter 'email' to be a non-empty string with an '@' character");

            expect(cb).toThrowError(err);
        });

        // Verifies new object has correct paramaters
        it('should throw an error if not provided an office number', () => {
            const cb = () => new Manager('Zach', 1, 'z.d.jorgensen@gmail.com');

            const err = new Error("Expected parameter 'officeNum' to be a number");

            expect(cb).toThrowError(err);
        });
    });
});