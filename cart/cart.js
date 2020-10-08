

import { tools } from '../data.js';
import { renderCartTable } from './cart-utils.js';
import { findById, getFromLocalStorage, CART } from '../utils.js';
import { clearCart } from './cart-api.js';

const table = document.querySelector('tbody');
const orderButton = document.querySelector('#orderButton');
const cart = getFromLocalStorage(CART) || [];

for (let i = 0; i < cart.length; i++) {
    const tool = cart[i];

    if (tool.quantity >= 0) {   
        const tr = renderCartTable(tool);
        table.appendChild(tr);    
    }
}

const total = calcLineItem(cart);

const totalCell = document.querySelector('#total');

totalCell.textContent = `Total: $${total}`;

function calcLineItem(cartArray) {
    // initialize an accumulator to 0
    let accumulator = 0;

    // for every item in the cart
    for (let i = 0; i < cartArray.length; i++) {
        const item = cartArray[i];
        // go get the item's true data
        const trueItem = findById(tools, item.id);

        // use the true data's price with the cart's quantity to get the subtotal for this item
        const subtotal = trueItem.price * item.quantity;

        // add that subtotal to the accumulator
        accumulator = accumulator + subtotal;
    }

    return accumulator;
}

orderButton.addEventListener('click', () => {
    const stringyCart = JSON.stringify(cart, true, 2);
    alert(stringyCart);

    localStorage.removeItem(CART);
    window.location.href = '/';

    if (cart.length === 0) {
        orderButton.disabled = true;
    }
    //window.location.href = '/';
});

const clearButton = document.querySelector('#clearCart');
clearButton.addEventListener('click', () => {
    clearCart(CART);
    console.log('CART');
    table.textContent = null;
    totalCell.textContent = '$0';

});




