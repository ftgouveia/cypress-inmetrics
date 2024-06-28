Feature: The advantageonlineshopping

  I want to open a advantageonlineshopping page

  Scenario: Search product in advantageonlineshopping and add to cart and validate product added into the cart
    Given I open advantageonlineshopping page
    When I search "HP ELITEPAD 1000 G2 TABLET" in the search bar
    And Add to cart
    Then Login in cart
    And Validate the product added into the checkout page
