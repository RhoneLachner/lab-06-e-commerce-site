

import { cart, tools } from '../data.js';
import { renderCartTable } from './cart-utils.js';
import { findById } from '../utils.js';

const table = document.querySelector('tbody');
const orderButton = document.querySelector('button');

for (let i = 0; i < cart.length; i++) {
    const tool = cart[i];
    const tr = renderCartTable(tool);
    table.appendChild(tr);    
}

const total = calcLineItem(cart);

const totalCell = document.querySelector('.total');

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

    // localStorage.removeItem(CART);
    localStorage.clear();
    window.location.href = '/';
});
