const Intern = require("../lib/Intern");

describe("Intern", () => {
    // Test for all use cases when initializing a new Intern object
    describe('Initialization', () => {
        it('should create an object with a name, id, email, and school', () => {
            const intern = new Intern('Zach', 1, 'z.d.jorgensen@gmail.com', 'UofU');

            // Verify that new object has correct properties
            expect(intern.name).toEqual('Zach');
            expect(intern.id).toEqual(1);
            expect(intern.email).toEqual('z.d.jorgensen@gmail.com')
            expect(intern.school).toEqual('UofU')
        });

        // Verifies new object has correct paramaters
        it('should throw an error if not provided a name', () => {
            const cb = () => new Intern(1, 'z.d.jorgensen@gmail.com', 'UofU');

            const err = new Error("Expected parameter 'name'");

            expect(cb).toThrowError(err);
        });

        // Verifies new object has correct paramaters
        it('should throw an error if not provided an id', () => {
            const cb = () => new Intern('Zach', 'z.d.jorgensen@gmail.com', 'UofU');

            const err = new Error("Expected parameter 'id'");

            expect(cb).toThrowError(err);
        });

        // Verifies new object has correct paramaters
        it('should throw an error if not provided an email', () => {
            const cb = () => new Intern('Zach', 1, 'UofU');

            const err = new Error("Expected parameter 'email'");

            expect(cb).toThrowError(err);
        });

        // Verifies new object has correct paramaters
        it('should throw an error if not provided a school', () => {
            const cb = () => new Intern('Zach', 1, 'z.d.jorgensen@gmail.com');

            const err = new Error("Expected parameter 'school'");

            expect(cb).toThrowError(err);
        });
    });
});