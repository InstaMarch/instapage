/*jslint node es6*/
const {makeAttributesHtml} = require("./helpers");

exports.makeTag = function (tagName, attributes, child) {
    "use strict";

    if (typeof(child) === "string") {

        const tagCharacters = child.split("").reduce(function (total, character) {
            if (character === "<" || character === ">") {
                return total + 1;
            }
            return total;
        }, 0);

        const numberOfAttributes = Object.keys(attributes).length;

        if (tagCharacters >= 4 && numberOfAttributes > 0) {  // if we're two tags deep..
            return "<" + tagName
                    + " " + makeAttributesHtml(attributes) + ">" + "\n" + "    "
                    + child + "\n" + "</" + tagName + ">";
        }

        if (tagCharacters >= 4 && numberOfAttributes === 0) {  // if we're two tags deep..
            return "<" + tagName + ">" + "\n" + "    "
                    + child + "\n" + "</" + tagName + ">";
        }

        if (numberOfAttributes > 0) {
            return "<" + tagName + " " + makeAttributesHtml(attributes) + ">"
                    + child + "</" + tagName + ">";
        }

        return "<" + tagName + ">" + child + "</" + tagName + ">";

    }
    if (Array.isArray(child)) {
        const childrenHtml = child.reduce((totalHtml, element) => totalHtml + "    " + element + "\n", "");

        return "<" + tagName + ">" + "\n" + childrenHtml + "</" + tagName + ">";
    }
};
