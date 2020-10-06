import { tools } from '../data.js';
import { renderTools } from '../utils.js';

const ul = document.querySelector('#list');

for (let i = 0; i < tools.length; i++) {
    const tool = tools[i];

    const li = renderTools(tool);

    ul.appendChild(li);    
}
