/// <reference types="Cypress" />

class SalesOrderBooking {
    Login(userName, password) {
        cy.get('#Username').type(userName);
        cy.get('#Password').type(password);
        cy.get("[value='login']").click();
    }
    SelectDetails(workshop, vehicle, bookingOptions, services, inspection) {
        cy.get(':nth-child(1) > :nth-child(1) > .mdc-card > .mdc-card__primary > .custom-avatar-icon2').click()
        cy.get('ul[class="mdc-list mdc-list--two-line"]').eq(0).contains(workshop).click()
        cy.get(':nth-child(2) > :nth-child(1) > .mdc-card > .mdc-card__primary > .custom-avatar-icon2').click()
        cy.get('ul[class="mdc-list mdc-list--two-line"]').eq(1).contains(vehicle).click()
        cy.get(':nth-child(3) > :nth-child(1) > .mdc-card > .mdc-card__primary > .custom-avatar-icon2').click()
        cy.get('ul[class="mdc-list mdc-list--two-line"]').eq(2).contains(bookingOptions).click()
        cy.get("div[class='mdc-layout-grid__cell mdc-layout-grid__cell--span-8-desktop']").contains(services).click()
        cy.get("div[class='mdc-layout-grid__cell mdc-layout-grid__cell--span-8-desktop']").contains(inspection).click()
        cy.get(".services-card > .mdc-button").click()
    }
    SelectDateAndTime(date, time){
        
    }
}

class test {
    //Modify class name and write appropriate functions
}

export { SalesOrderBooking, test };