const form = document.querySelector('form');
import { PRODUCTS } from '../constants.js';
import { getLocalStorageTools } from '../utils.js';

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);

    const id = data.get('id');
    const name = data.get('name');
    const maker = data.get('maker');
    const stockImage = data.get('stockImage');
    const price = data.get('price');
    let onSale = data.get('onSale');


    const newTool = {
        id: id,
        name: name,
        maker: maker,
        stockImage: stockImage,
        price: Number(price),
        onSale: onSale,
    };


    const localStorageTools = getLocalStorageTools();

    localStorageTools.push(newTool);

    const stringyLocalTools = JSON.stringify(localStorageTools);
    localStorage.setItem(PRODUCTS, stringyLocalTools);

});
