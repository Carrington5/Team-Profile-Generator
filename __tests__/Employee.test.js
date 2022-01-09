const Employee = require('../lib/Employee');

test('Can get name via getName()', () => {
    const testValue = ''
    const e = new Employee(testValue);

    expect(e.getName()).toBe(testValue)
})