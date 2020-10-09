
import { getLocalStorageTools, renderTools } from '../utils.js';

const localStorageTools = getLocalStorageTools();

const ul = document.querySelector('#list');

for (let i = 0; i < localStorageTools.length; i++) {
    const tool = localStorageTools[i];

    const li = renderTools(tool);

    ul.appendChild(li);    
}
