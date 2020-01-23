import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import { SalesOrderBooking, test } from "../Common/common.js"
var data = require("../../fixtures/Testdata/testdata.json")

var sob = new SalesOrderBooking();

beforeEach(() => {
    cy.log('Im before each')
})

Given('I open {string}', (url) => {
    cy.visit(url);
})
When('I enter valid credentials', () => {
    sob.Login(data.uname, data.pwd);
})
Then('Title should be {string}', (title) => {
    cy.title().should('eq', title)
})
Then('Select Workshop, Vehicle Details, Booking Options, Services and Inspection', () => {
    sob.SelectDetails(data.workshop, data.vehicle, data.bookingOption, data.services, data.inspection)
})
And('Select Date, Time and Confirm Booking',()=>{
    var d = new Date()
    console.log(d.getDate())
})

afterEach(() => {
    cy.log('Im after each')
})