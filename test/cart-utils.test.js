/*export function findById(someArray, someId) {
    for (let i = 0; i < someArray.length; i++) {
        const item = someArray[i];
        // is this item a match with our someId?
        if (item.id === someId) {
            return item;
        }
    }
}*/
const test = QUnit.test;

import { renderCartTable } from '../cart/cart-utils.js';

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
