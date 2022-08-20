const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    // Test for all use cases when initializing a new Engineer object
    describe('Initialization', () => {
        it('should create an object with a name, id, email, and gitHub', () => {
            const engineer = new Engineer('Zach', 1, 'z.d.jorgensen@gmail.com', 'zdjorgensen');

            // Verify that new object has correct properties
            expect(engineer.name).toEqual('Zach');
            expect(engineer.id).toEqual(1);
            expect(engineer.email).toEqual('z.d.jorgensen@gmail.com')
            expect(engineer.gitHub).toEqual('zdjorgensen')
        });

        // Verifies new object has correct paramaters
        it('should throw an error if not provided a name', () => {
            const cb = () => new Engineer(1, 'z.d.jorgensen@gmail.com', 'zdjorgensen');

            const err = new Error("Expected parameter 'name' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

        // Verifies new object has correct paramaters
        it('should throw an error if not provided an id', () => {
            const cb = () => new Engineer('Zach', 'z.d.jorgensen@gmail.com', 'zdjorgensen');

            const err = new Error("Expected parameter 'id' to be a number");

            expect(cb).toThrowError(err);
        });

        // Verifies new object has correct paramaters
        it('should throw an error if not provided an email', () => {
            const cb = () => new Engineer('Zach', 1, 'zdjorgensen');

            const err = new Error("Expected parameter 'email' to be a non-empty string with an '@' character");

            expect(cb).toThrowError(err);
        });

        // Verifies new object has correct paramaters
        it('should throw an error if not provided a gitHub', () => {
            const cb = () => new Engineer('Zach', 1, 'z.d.jorgensen@gmail.com');

            const err = new Error("Expected parameter 'gitHub' to be a non-empty string");

            expect(cb).toThrowError(err);
        });
    });
});