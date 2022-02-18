const { expect } = require('@jest/globals');
const Manager = require('../lib/manager.js');

const testEmployee = new Manager('Fred', 5, 'fred@fred.com', 101)

test('Can get the name through the getName function for employee',() => {
    expect(testEmployee.getName()).toBe('Fred')
})

test('Can get the ID through the getID function for employee',() => {
    expect(testEmployee.getID()).toBe(5)
})

test('Can get the email through the getEmail function for employee',() => {
    expect(testEmployee.getEmail()).toBe('fred@fred.com')
})

test('Can get the office number through the getOfficeNumber function for employee',() => {
    expect(testEmployee.getOfficeNumber()).toBe(101)
})