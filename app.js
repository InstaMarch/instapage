/*jslint node es6*/
const {makeAttributesHtml, makeHtmlElementWithChild, addLine} = require("./helpers");

module.exports.makeTag = function (tagName, attributes, child) {
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
            return makeHtmlElementWithChild(tagName, addLine(child, 4));
        }

        if (numberOfAttributes > 0) {
            return "<" + tagName + " " + makeAttributesHtml(attributes) + ">"
                    + child + "</" + tagName + ">";
        }

        return "<" + tagName + ">" + child + "</" + tagName + ">";

    }
    if (Array.isArray(child)) {
        const childrenHtml = child.reduce((totalHtml, element) => totalHtml + addLine(element, 4), "");

        return makeHtmlElementWithChild(tagName, childrenHtml);
    }
    return "";
};

module.exports.makePage = function () {
    let document = "";
    document += "<!DOCTYPE html>";
    document += "<html>";
    document += "<body>";
    document += "</body>";
    document += "</html>";
    return document;
};
