/*export function findById(someArray, someId) {
    for (let i = 0; i < someArray.length; i++) {
        const item = someArray[i];
        // is this item a match with our someId?
        if (item.id === someId) {
            return item;
        }
    }
}*/
import { renderCartTable } from '../cart/cart-utils.js';
import { addProduct } from '../utils.js';


import { findById, } from '../utils.js';
import { tools } from '../data.js';






const test = QUnit.test;



test('should take in a cartItem and return a tr element with the appropriate contents', (expect) => {
    const cartItem = {
        id: 'knife',
        quantity: 2
    };

    //Arrange
    // Set up your arguments and expectations
    const expected = '<tr><td>knife</td><td>$20</td><td>2</td><td>$40</td></tr>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderCartTable(cartItem);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});


test('should take in an array and return the correct id', (expect) => {

    const expected = {
        id: 'knife',
        name: 'Fixed Blade Outdoor Knife with Sandvik Stainless Steel Blade, 4.1-Inch',
        maker: 'Morakniv',
        stockImage: 'knife.jpg',
        price: 20,
        onSale: true,

    };
    const id = 'knife';

    const actual = findById(tools, id);

    expect.deepEqual(expected, actual);
});


test('addProduct should take in a product object and add it to local storage (returning nothing)', (expect) => {
    const newTool = {
        id: 'knife',
        price: 20
    };
    const expectation = null;

    //Arrang1e
    // Set up your arguments and expectations    //Act 
    // Call the function you're testing and set the result to a const
    addProduct(newTool);

    const localStorageAfter = JSON.parse(localStorage.getItem('tools'));
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(expectation, localStorageAfter);
});

