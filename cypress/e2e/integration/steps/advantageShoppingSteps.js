import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { advantageShopping } from '../pages/advantageShoppingPage'
import { advantageShoppingApi } from '../pages/advantageShoppingApiPage'

const url = "https://advantageonlineshopping.com/";


Given(`I open advantageonlineshopping page`, () => {
  cy.viewport(1024, 768)
  cy.visit(url);
});

When(`I search {string} in the search bar`, product => {
  advantageShopping.searchProduct();
});

Then(`Add to cart`, () => {
  advantageShopping.selectColor();
  advantageShopping.addQuantity("1");
  advantageShopping.addCartAndCheckout()
});

Then(`Login in cart`, () => {
  advantageShopping.loginAccount()
});

Then(`Validate the product added into the checkout page`, () => {
  advantageShopping.ValidateProductPaymentMethod()
});

Given(`I search {string} in api`, () => {
  advantageShoppingApi.getProductApi()
});

Given(`I update image from product {string} in api`, () => {
  advantageShoppingApi.getProductApi()
});