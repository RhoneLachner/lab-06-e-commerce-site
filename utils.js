


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

    li.appendChild(button);

    return li;
}
export default renderTools;
