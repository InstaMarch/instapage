/*jslint node es6*/

exports.makeTag = function (tagName, attributes, child) {
    "use strict";
    const tagCharacters = child.split("").reduce(function (total, character) {
        if (character === "<" || character === ">") {
            return total + 1;
        }
        return total;
    }, 0);

    const numberOfAttributes = Object.keys(attributes).length;

    if (tagCharacters >= 4 && numberOfAttributes > 0) {  // if we're two tags deep..
        return "<" + tagName
                + makeAttributesHtml + " >" + "\n" + "    "
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

    if (numberOfAttributes === 0) {
        return "<" + tagName + ">" + child + "</" + tagName + ">";
    }

    function makeAttributesHtml(attributes) {
        return Object.keys(attributes)
            .map(function (attribute, attributeNumber) {
                if (attributeNumber === 0) {
                    return attribute + "='" + attributes[attribute] + "'";
                }
                if (attributeNumber > 0) {
                    return " " + attribute + "='" + attributes[attribute] + "'";
                }
            })
            .reduce((output, htmlAttribute) => output += htmlAttribute, "");
    }
};
