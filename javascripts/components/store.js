import cart from './cart.js';
import utilities from '../helpers/utilities.js';

// pulled in cart from cart.js to use in this page

const bookInfo = {
  price: 24.99,
  title: "The 50th Law",
  image: "assets/images/book.jpg"
};


const addToCartEvent = () => {
  cart.setCart(bookInfo);
  cart.cartToDom();
};

const makeStore = () => {
let domString = '<h2> Our only book:</h2>';
domString += '<p>Buy it now:</p>';
domString += `<h3>$${bookInfo.price}</h3>`;
domString += `<img src=${bookInfo.image} alt="book-cover"/>`;
domString += '<button  id="cart-button" type="button" class="btn btn-success col-12">Add to Cart</button>'; 
utilities.printToDom('store-container', domString);
document.getElementById('cart-button').addEventListener('click', addToCartEvent);
};


















export default { makeStore};