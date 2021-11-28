const Manager = require('../lib/Manager');

test('creates an manager object', () => {
    const manager = new Manager('Kassidy', 1234, 'kassidy@company.com');

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.ID).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
});