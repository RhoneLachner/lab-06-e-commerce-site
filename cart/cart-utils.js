import { tools as toolsArray } from '../data.js';
import { findById } from '../utils.js';
/*
    const cartItem = {
        id: 'airplanes',
        quantity: 2
    };
*/

export function renderCartTable(cartItem) 
{
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdPrice = document.createElement('td');
    const tdQuantity = document.createElement('td');
    const tdTotal = document.createElement('td');



    tdQuantity.textContent = cartItem.quantity;
    console.log(cartItem);
    // we need the name and the price of the book
    // the name and price of the book live in the sourceOfTruth
    // we should use our findById function to get the airplane data from the source of truth

    // findById is going to return { a book object } that we'll call bookData
    const toolData = findById(
        // findById takes an array
        toolsArray, 
        // and an id to match against
        cartItem.id
    );

    /* bookData is an object that has: .title, .id, .price, .author */
    const price = toolData.price;
    const name = toolData.id;

    tdPrice.textContent = `$${price}`;
    tdName.textContent = name;

    const total = price * cartItem.quantity;

    tdTotal.textContent = `$${total}`;

    tr.append(tdName, tdPrice, tdQuantity, tdTotal);

    return tr;
}

/* import { tools } from '../utils.js';
export function cartTotal(cartArray) {
    let accumulator = 0;
    for (let i = 0; i < cartArray.length; i++) {
        const item = cartArray[i]; 
        const actualItem = findById(tools, item.id);
        const subtotal = actualItem.price * item.quantity;
        console.log(subtotal);
        accumulator = accumulator + subtotal;
    }
    return accumulator;
}
*/


