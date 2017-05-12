/*jslint
    browser, es6
*/

function makeElement(type, props, text) {
    "use strict";
    const el = document.createElement(type);
    Object.keys(props).forEach(function (prop) {
        el[prop] = props[prop];
    });

    const textNode = document.createTextNode(text);

    el.appendChild(textNode);

    return el;
}

const h1 = (...args) => makeElement(`h1`, ...args);

document.body.appendChild(h1(
    {
        className: "title"
    },
    `Hello, world.`
));
