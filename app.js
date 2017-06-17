/*jslint node es6*/

exports.makeTag = function (tagName, child) {
    "use strict";
    const tagCharacters = child.split("").reduce(function (total, character) {
        if (character === "<" || character === ">") {
            return total + 1;
        }
        return total;
    }, 0);
    if (tagCharacters >= 4) {
        return "<" + tagName + ">" + "\n" + "    " + child + "\n" + "</" + tagName + ">";
    }
    return "<" + tagName + ">" + child + "</" + tagName + ">";

};
