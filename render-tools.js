function renderTools(tool) {

    const li = document.createElement('li');
    li.classList.add('tool');
    li.name = tool.name;

    const name = document.createElement('name');
    name.textContent = tool.name;
    li.appendChild(name);

    const img = document.createElement('img');
    img.src = '../assets/' + tool.image;
    li.appendChild(img);

    const maker = document.createElement('maker');
    maker.classList.add('maker');
    maker.textContent = tool.maker;
    li.appendChild(maker);

    const p = document.createElement('p');
    p.classList.add('price');
    p.textContent = tool.price;
   

    const button = document.createElement('button');
    button.textContent = 'Add to cart';
    p.appendChild(button);

    return li;
}

export default renderTools;
