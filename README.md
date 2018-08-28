## React-Assessment

### Dependencies

- redux: for state manangement
- bootstrap: for pre-styled components
- reactstrap: for custom bootstrap components for react
- react-router-dom: linking/navigation/routing etc.

### Structure

- Components
  - All components (other than _App_) are included in the _Components_ directory.
  - _ShopCard_
    - uses _reactstrap_ extensively for the provision of pre-styled card components, animations for collapse, etc.
    - has a state which defines the quantity of a default products as 1
    - the card is collapsed by default - also a part of _state_ - this behavior can be seen/reversed on hovering the mouse over a product
    - on hovering an input field is augmented, where the quantity can be changed which is equal to 1, by default
    - the details of a product are received as props
    - the component renders a Card with an id; the state changes on hovering of the mouse over it
    - how to structure a card is referenced from here - [https://reactstrap.github.io/components/card/](https://reactstrap.github.io/components/card/)
    - all of the additional css is inline
  - _ShoppingList_
    - uses _reactstrap_ to structure many cards into a row and column structure
    - the render function first maps all of the products received as props in a single column and then splits the list into rows - each row has 3 cards
  - _Menu_
    - renders the navbar shown on the top of the page
    - has a state that just takes care whether the cart is open or closed
    - includes the heading, an image and a badge which displays the number of items in the cart
    - when you click on the image, you'll be taken to the _Cart_ component
    - reference - [https://reactstrap.github.io/components/navbar/](https://reactstrap.github.io/components/navbar/)
  - _Cart_
    - makes use of the _Table_ component of _reactstrap_ to display a list of selected items
    - receives the items in the cart and a function to remove the specific item as props
    - renders table data which includes image, id, name and price from the cart items received
    - sums up the total amount and displays the final Price
    - clicking close button takes you to the previous page
    - clicking checkout button routes to another page with a pre-defined message
  - _HomePage_
    - one of the main pages
    - gets the products and the items added in the cart as props
    - renders the _Menu_ component, passes the length of the card which is displayed on the badge
    - renders the _ShoppingList_ component, passes the products to be rendered and the _addProduct_ method to add an item to the cart
  - _CartPage_
    - referenced from [https://reactstrap.github.io/components/modals/](https://reactstrap.github.io/components/modals/)
    - makes use of a modal inside which the _Cart_ coponent is rendered
    - calculates the total price if the cart items and displays it below the cart
    - contains two buttons - checkout leads to another page, close leads to previous pages
    - on checkout, another modal is displayed with a message and a close buttons - which leads to the home page
    - close button on the cart page also leads to the home page
  - _ProductPage_
    - renders a modal when a product from the shopping list is clicked
    - the modal also has the functionality of adding an item to the cart
    - close button on the modal leads back to the home page
  - _Login_
    - uses _reactstrap_ for rendering a form
    - doesn't function as of now
  - _App_
    - fetched products before the component mounts
    - defines methods to add product, to remove product, and to update the cart
    - defines _mapStatetoProps_ and _mapDispatchToProps_ necessary for the redux functioning
    - renders _HomePage_ component on default route of _/_
    - renders _CartPage_ component when route is changed to _/cart_ on clicking the cart image present in the _Menu_ component

- state
  - contains redux related stuff
  - has two directories, one for the cart and another for a product
  - each of them has a action and a reducer
  - _actionType.js_ defines constants fetching products, adding an item to the cart, and deleting an item from the cart
  - _reducer.js_ combines the abovementioned reducers
  - _store.js_ creates a store from the combined reducer

- lib
  - has a _logos_ directory which includes a PNG image for the cart logo displayed on the top-right corner
  - has a _product_ directory which has a file _products.mock.js_ that exports an array of the objects which are displayed
  - each object has an id, an image url which I've by default set to an image of GoPro action camera I found on the internet (the link is shortened), a name, a price for the product and a description.
  - another file is _api.js_ in the same directory that defines a function which returns the mock products defined in the above mentioned file.
