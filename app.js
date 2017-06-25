/*jslint node es6*/

exports.makeTag = function (tagName, attributes, child) {
    "use strict";
    const tagCharacters = child.split("").reduce(function (total, character) {
        if (character === "<" || character === ">") {
            return total + 1;
        }
        return total;
    }, 0);

    const numberOfAttibutes = Object.keys(attributes).length;

    if (tagCharacters >= 4 && numberOfAttibutes > 0) {  // if we're two tags deep..
        return "<" + tagName + "class ="
                + attributes.class + " >" + "\n" + "    "
                + child + "\n" + "</" + tagName + ">";
    }

    if (tagCharacters >= 4 && numberOfAttibutes > 0) {  // if we're two tags deep..
        return "<" + tagName + ">" + "\n" + "    "
                + child + "\n" + "</" + tagName + ">";
    }

    if (attributes.class) {
        return "<" + tagName + " class=\'page-title\'" + ">"
                + child + "</" + tagName + ">";
    }

    if (!attributes.class) {
        return "<" + tagName + ">" + child + "</" + tagName + ">";
    }
};