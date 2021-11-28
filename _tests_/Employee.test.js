const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Kassidy', 1234, 'kassidy@company.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.ID).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});