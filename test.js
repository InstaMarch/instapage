/*
    Import has a weird way of making a default object as the interface.
    It also enables bad code by allowing a user to change the imported file's name. JSLint forbids this option.
    babel test.js --presets es2015
    https://babeljs.io/docs/usage/cli/
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
    http://www.jslint.com/help.html
*/

import fs from 'fs';

let funk = (input) => input * 2;

console.log(funk(2));
