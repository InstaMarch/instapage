/*jslint
    browser, es6
*/

function makeElement(type, text) {
    "use strict";
    const el = document.createElement(type);
    const textNode = document.createTextNode(text);

    el.appendChild(textNode);

    return el;
}

//const h1 = () => makeElement(`h1`);

//document.body.appendChild(h1());
const h1 = (text) => makeElement(`h1`, text);

document.body.appendChild(h1(`Hello, world.`));
