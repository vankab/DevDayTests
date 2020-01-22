/// <reference types="Cypress" />

class SalesOrderBooking {
    Login(userName, password) {
        cy.get('#Username').type(userName);
        cy.get('#Password').type(password);
        cy.get("[value='login']").click();
    }
}

class test{
    //Modify class name and write appropriate functions
}

export {SalesOrderBooking,test};