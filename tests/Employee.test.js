const Employee = require("../lib/Employee");

describe("Employee", () => {
    // Test for all use cases when initializing a new Employee object
    describe('Initialization', () => {
        it('should create an object with a name, id, and email')
            const Employee = new Employee('Zach', 1, 'z.d.jorgensen@gmail.com');
    
            // Verify that new object has correct properties
            expect(Employee.name).toEqual('Zach');
            expect(Employee.id).toEqual(1);
            expect(Employee.email).toEqual('z.d.jorgensen@gmail.com')
    });

    // Verifies new object has correct paramaters
    it('should throw an error if provided no arguments', () => {
        const cb = () => new Employee();

        const err = new Error("Needs to be passed parameters")
        expect(cb).toThrowError(err);
    });

    // Verifies new object has correct paramaters
    it('should throw an error if not provided a name', () => {
        const cb = () => new Employee(1, 'z.d.jorgensen@gmail.com');

        const err = new Error("Expected parameter 'name'");

        expect(cb).toThrowError(err);
    }); 

    // Verifies new object has correct paramaters
    it('should throw an error if not provided an id', () => {
        const cb = () => new Employee('Zach', 'z.d.jorgensen@gmail.com');

        const err = new Error("Expected parameter 'id'");

        expect(cb).toThrowError(err);
    });

    // Verifies new object has correct paramaters
    it('should throw an error if not provided an email', () => {
        const cb = () => new Employee('Zach', 1);

        const err = new Error("Expected parameter 'email'");

        expect(cb).toThrowError(err);
    }); 
});