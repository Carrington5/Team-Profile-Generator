const Engineer = require('../lib/Engineer');

test('Can get Github via getGithub()', () => {
    const testValue = ''
    const e = new Engineer(testValue, testValue, testValue, testValue);

    expect(e.getGithub()).toBe(testValue)
})