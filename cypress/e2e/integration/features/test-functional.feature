Feature: The Facebook

  I want to open a advantageonlineshopping page

  Scenario: Search product in advantageonlineshopping and add to cart and validate product added into the cart
    Given I open advantageonlineshopping page
    When I search "HP ELITEPAD 1000 G2 TABLET" in the search tab
    And Add to cart
    Then Validate the product added into the cart

  Scenario: Search product in advantageonlineshopping and add to cart and validate product added into the cart
    Given I open advantageonlineshopping page
    When I search "HP ELITEPAD 1000 G2 TABLET" in the search tab
    And Add to cart other collor
    Then Validate the product added into the cart

  Scenario: Search product in advantageonlineshopping and add to cart and validate product added into the cart
    Given I open advantageonlineshopping page
    When I search "HP ELITEPAD 1000 G2 TABLET" in the search tab
    And Add to cart two product
    Then Validate the product added into the cart

  Scenario: Search product in advantageonlineshopping and add to cart and validate product added into the cart
    Given I open advantageonlineshopping page
    When I search "HP ELITEPAD 1000 G2 TABLET" in the search tab
    And Add to cart two product
    And Remove into cart one product
    Then Validate the product added into the cart

    Given I open advantageonlineshopping page
    When I search "HP ELITEPAD 1000 G2 TABLET" in the search tab
    And Add to cart two product
    And Remove all products in the cart
    Then Validate the empty cart