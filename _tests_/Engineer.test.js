const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Kassidy', 1234, 'kassidy@company.com');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.ID).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
});