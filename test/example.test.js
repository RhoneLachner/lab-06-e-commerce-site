// IMPORT MODULES under test here:
// import { example } from '../example.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    const tool = {
        id: '00000',
        name: 'Fixed Blade Outdoor Knife with Sandvik Stainless Steel Blade, 4.1-Inch',
        maker: 'Morakniv',
        stockImage: 'knife.jpg',
        price: 20,
        onSale: true,
    };
    // Set up your arguments and expectations
    const expected = '<li id="00000" class="tool on-sale"><p class="name">Fixed Blade Outdoor Knife with Sandvik Stainless Steel Blade, 4.1-Inch</p><p class="maker">Morakniv</p><img class="stockImage" src="../assets/knife.jpg"><p class="price">$20.00</p><button>Add to cart</button></li>"]';


    //Act 
    // Call the function you're testing and set the result to a const
    const actual = false;


    
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
