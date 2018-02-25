# eStore and Shopping Cart front end built with ReactJS.

[Source Files](https://github.com/mariobox/react-shopping-cart) | [Live Demo](http://mariobox.github.io/react-shopping-cart-demo)<hr />

This is a simple eCommerce store plus shopping cart interface built by taking advantage of the modular nature of ReactJS. The app displays a collection of shirts from different national soccer teams, each of them embedded in a [Bootstrap card](https://getbootstrap.com/docs/4.0/components/card/) and contained in a `<Product />` React component. Each product card has the functionality of adding (+) or decreasing (-) the number of shirts and features a button to add them to the shopping cart.  For a better user experience, the "Add To Cart" button text changes to "Added" for a few seconds, to reassure users that their selection has been in fact added to the shopping cart.

The site uses a `<Header />` component which is basically a Bootstrap element with a `navbar` class that remains fixed and visible at all times. A shopping cart icon is located to the right of the header, included in a `<Counter />` component that also displays the number of items in the shopping cart and the total $ value of the contents.

When you click on the shopping cart icon, a Bootstrap modal containing a `<ModalCart />` component pops up and shows the items in the `<ShoppingCart />`. 

<img src="../img/shoppingcart.jpg" class="profile">

The shopping cart itself contains one or several `<ShoppingCartItems />`, each displaying the items selected, their description, unit price and subtotal. A small thumbnail of the product has been added for a better user experience.  If the shopping cart is empty a "Your cart is empty" message is displayed.  Other added functionality included a "Remove" button for each item in the shopping cart. When the "Remove" button is clicked the item is removed and the total dollar amount is recalculated.

Finally, the shopping cart features a "Proceed to Checkout button". When you press it the page and the shopping cart are refreshed. In a full-fledged application it would take you to a page where you can pay for your purchase, but since this project deals only with the front-end, resetting the page is a good default action.

The data for the different shirts is stored in a JavaScript file containing an array of objects: each shirt is an object with properties such as team name, price, image and initial quantity (set to 0 by default).

ES6 JavaScript classes have been used in this project.