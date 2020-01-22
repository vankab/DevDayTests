import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import { SalesOrderBooking, test } from "../Common/common.js"
var data = require("../../fixtures/Testdata/testdata.json")

beforeEach(() => {
    cy.log('Im before each')
})

Given("Test",()=>{
    cy.log("Test")
})
Then("Print Test123",()=>{
    cy.log("Test123123123")
})
Given('I open {string}', (url) => {
    cy.visit(url);
})
When('I enter valid credentials', () => {
    var sob = new SalesOrderBooking();
    sob.Login(data.uname, data.pwd);
})
Then('Title should be {string}', (title) => {
    cy.title().should('eq', title)
})


afterEach(()=>{
    cy.log('Im after each')
})