const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    // Test for all use cases when initializing a new Engineer object
    describe('Initialization', () => {
        it('should create an object with a name, id, email, and gitHub')
            const Engineer = new Engineer('Zach', 1, 'z.d.jorgensen@gmail.com', 'zdjorgensen');
    
            // Verify that new object has correct properties
            expect(Engineer.name).toEqual('Zach');
            expect(Engineer.id).toEqual(1);
            expect(Engineer.email).toEqual('z.d.jorgensen@gmail.com')
            expect(Engineer.gitHub).toEqual('zdjorgensen')
    });

    // Verifies new object has correct paramaters
    it('should throw an error if provided no arguments', () => {
        const cb = () => new Engineer();

        const err = new Error("Needs to be passed parameters")
        expect(cb).toThrowError(err);
    });

    // Verifies new object has correct paramaters
    it('should throw an error if not provided a name', () => {
        const cb = () => new Engineer(1, 'z.d.jorgensen@gmail.com', 'zdjorgensen');

        const err = new Error("Expected parameter 'name'");

        expect(cb).toThrowError(err);
    }); 

    // Verifies new object has correct paramaters
    it('should throw an error if not provided an id', () => {
        const cb = () => new Engineer('Zach', 'z.d.jorgensen@gmail.com', 'zdjorgensen');

        const err = new Error("Expected parameter 'id'");

        expect(cb).toThrowError(err);
    });

    // Verifies new object has correct paramaters
    it('should throw an error if not provided an email', () => {
        const cb = () => new Engineer('Zach', 1, 'zdjorgensen');

        const err = new Error("Expected parameter 'email'");

        expect(cb).toThrowError(err);
    }); 

    // Verifies new object has correct paramaters
    it('should throw an error if not provided a gitHub', () => {
        const cb = () => new Engineer('Zach', 1, 'z.d.jorgensen@gmail.com');

        const err = new Error("Expected parameter 'gitHub'");

        expect(cb).toThrowError(err);
    }); 
});