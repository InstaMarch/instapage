/*jslint node es6*/

exports.makeTag = function (tagName, attributes, child) {
    "use strict";
    const tagCharacters = child.split("").reduce(function (total, character) {
        if (character === "<" || character === ">") {
            return total + 1;
        }
        return total;
    }, 0);
    if (tagCharacters >= 4 && attributes.class) {  // if we're two tags deep..
        return "<" + tagName + "class ="
                + attributes.class + " >" + "\n" + "    "
                + child + "\n" + "</" + tagName + ">";
    }

    if (tagCharacters >= 4 && !attributes.class) {  // if we're two tags deep..
        return "<" + tagName + ">" + "\n" + "    "
                + child + "\n" + "</" + tagName + ">";
    }


    let string;
    if (attributes.class) {
        string = "<" + tagName + " class=\'page-title\'" + ">"
                + child + "</" + tagName + ">";
    }

    if (!attributes.class) {
        string = "<" + tagName + ">" + child + "</" + tagName + ">";
    }

    return string;
};
