const { expect } = require('@jest/globals');
const Intern = require('../lib/intern.js');

const testEmployee = new Intern('Bill', 7, 'bill@bill.com', 'Columbia University')

test('Can get the name through the getName function for employee',() => {
    expect(testEmployee.getName()).toBe('Bill')
})

test('Can get the ID through the getID function for employee',() => {
    expect(testEmployee.getID()).toBe(7)
})

test('Can get the email through the getEmail function for employee',() => {
    expect(testEmployee.getEmail()).toBe('bill@bill.com')
})

test('Can get the school name through the getSchool function for employee',() => {
    expect(testEmployee.getSchool()).toBe('Columbia University')
})