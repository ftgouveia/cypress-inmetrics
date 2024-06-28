/// <reference types = "cypress"/>

const pageElements = {
    searchButton: '#menuSearch',
    searchBarButton: '#mobileSearch > input',
    clickProduct: "#searchPage > div.noPromotedProductDiv > div > div > div:nth-child(2) > ul > li > p:nth-child(4) > a",
    selectColor: '#productProperties > div.colors.ng-scope > div:nth-child(2)',
    selectQuantity: '#productProperties > div.smoolMargin > e-sec-plus-minus > div > div:nth-child(2) > input',
    addCartButton: '#productProperties > div.fixedBtn > button',
    clickCartShopping: "#menuCart",
    clickCheckoutButton: "#checkOutButton",
    buttonNextPaymentMethod: '#next_btn',
    usernameLogin: "#orderPayment > div:nth-child(1) > div > div:nth-child(1) > sec-form > sec-view:nth-child(1) > div > input",
    passwordLogin: "#orderPayment > div:nth-child(1) > div > div:nth-child(1) > sec-form > sec-view:nth-child(2) > div > input",
    buttonLogin: "#login_btn",
    validateNameProduct: "#product > td:nth-child(2) > a > h3",

}

class advantageShoppingPage {

    searchProduct() {
        cy.get(pageElements.searchBarButton).should("be.visible").type("HP ELITEPAD 1000 G2 TABLET{enter}")
        cy.get(pageElements.clickProduct).should("be.visible").click()
    }

    addQuantity(quantity) {
        cy.get(pageElements.selectQuantity).should("be.visible").type(quantity)
    }

    selectColor(colorName) {
        cy.get(pageElements.selectColor).should("be.visible").click(colorName)
    }

    addCartAndCheckout() {
        cy.get(pageElements.addCartButton).should("be.visible").click()
        cy.get(pageElements.clickCartShopping).should("be.visible").click()
        cy.get(pageElements.clickCheckoutButton).should("be.visible").click()

    }

    loginAccount() {
        cy.get(pageElements.usernameLogin).should("be.visible").type("ftgou_inmetrics")
        cy.get(pageElements.passwordLogin).should("be.visible").type("123456Abc")
        cy.get(pageElements.buttonLogin).should("be.visible").click()

    }

    ValidateProductPaymentMethod() {
        cy.get(pageElements.buttonNextPaymentMethod).should("be.visible").click()
        cy.get(pageElements.validateNameProduct).should("have.text", "HP ELITEPAD 1000 G2 TABLETHP ELITEPAD 1000 G2 TABLET")

    }
    
}
export const advantageShopping = new advantageShoppingPage();