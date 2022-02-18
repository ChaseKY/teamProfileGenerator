const { expect } = require('@jest/globals');
const Engineer = require('../lib/engineer.js');

const testEmployee = new Engineer('John', 6, 'john@john.com', 'JohnDoe')

test('Can get the name through the getName function for employee',() => {
    expect(testEmployee.getName()).toBe('John')
})

test('Can get the ID through the getID function for employee',() => {
    expect(testEmployee.getID()).toBe(6)
})

test('Can get the email through the getEmail function for employee',() => {
    expect(testEmployee.getEmail()).toBe('john@john.com')
})

test('Can get the github username through the getGithub function for employee',() => {
    expect(testEmployee.getGithub()).toBe('JohnDoe')
})