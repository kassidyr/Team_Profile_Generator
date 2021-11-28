const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Kassidy', 1234, 'kassidy@company.com');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.ID).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
});