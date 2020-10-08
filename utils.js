

export const CART = 'CART';

export function findById(someArray, someId) {
    for (let i = 0; i < someArray.length; i++) {
        const item = someArray[i];
        // is this item a match with our someId?
        if (item.id === someId) {
            return item;
        }
    }
}

export function renderTools(tool) {
    const li = document.createElement('li');

    const name = document.createElement('p');
    const maker = document.createElement('p');
    const stockImage = document.createElement('img');
    const price = document.createElement('p');
    const button = document.createElement('button');

    li.classList.add('tool');

    if (tool.onSale) {
        li.classList.add('on-sale');
    }

    name.classList.add('name');
    name.textContent = tool.name;

    li.appendChild(name);

    maker.classList.add('maker');
    maker.textContent = tool.maker;

    li.appendChild(maker);

    stockImage.classList.add('stockImage');

    stockImage.src = `../assets/${tool.stockImage}`;

    li.appendChild(stockImage);

    price.classList.add('price');
    price.textContent = `$${tool.price.toFixed(2)}`;

    li.appendChild(price);


    button.textContent = 'Add to cart';

    button.addEventListener('click', () => {
    // get or initialize the cart
    // MAGIC STRING
        const cart = getFromLocalStorage(CART) || [];

    // itemInCart will be either { id: 'apple', quantity: 2}, or undefined 
        const itemInCart = findById(cart, tool.id);

    // is this the first apple in the cart?
        if (itemInCart === undefined) {
        // if its not in the cart, this is our first apple
        // so make a new cart item and put it in the array with quantity 1

            const newCartItem = {
                id: tool.id,
                quantity: 1, 
            };

            cart.push(newCartItem);
        } else {
        // however, if i already have an apple, just increment the quantity of apples in the cart    
            itemInCart.quantity++;
        }

        setInLocalStorage(CART, cart);
    });

    li.appendChild(button);

    return li;
}
export function getFromLocalStorage(key) {
    const item = localStorage.getItem(key);

    return JSON.parse(item);
}

// this function will not return anything
export function setInLocalStorage(key, value) {
    const stringyItem = JSON.stringify(value);

    localStorage.setItem(key, stringyItem);

    return value;
}
