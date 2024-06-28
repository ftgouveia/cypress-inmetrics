import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import { advantageShoppingPage } from '../pages/advantageShoppingPage'

const url = "https://advantageonlineshopping.com/";

Given(`I open advantageonlineshopping page`, () => {
  cy.visit(url);
});

When(`I search {string} in the search bar`, product => {
  advantageShoppingPage.searchProduct();
});

And(`Add to cart`, () => {
  advantageShoppingPage.selectColor();
  advantageShoppingPage.addQuantity();
  advantageShoppingPage.addCartAndCheckout()
});

Then(`Login in cart`, () => {
  advantageShoppingPage.loginAccount()
});

And(`Validate the product added into the checkout page`, () => {
  advantageShoppingPage.ValidateProductPaymentMethod()
});