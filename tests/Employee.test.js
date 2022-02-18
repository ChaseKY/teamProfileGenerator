const { expect } = require('@jest/globals');
const Employee = require('../lib/employee.js');

const testEmployee = new Employee('Bob', 4, 'bob@bob.com')

test('Can get the name through the getName function for employee',() => {
    expect(testEmployee.getName()).toBe('Bob')
})

test('Can get the ID through the getID function for employee',() => {
    expect(testEmployee.getID()).toBe(4)
})

test('Can get the email through the getEmail function for employee',() => {
    expect(testEmployee.getEmail()).toBe('bob@bob.com')
})