/*jslint
    browser, es6
*/

function makeElement(type) {
    "use strict";
    return document.createElement(type);
}

const h1 = () => makeElement(`h1`);

document.body.appendChild(h1());
