/*jslint node es6*/

module.exports.makeAttributesHtml = function (attributes) {
    "use strict";
    return Object.keys(attributes)
        .map(function (attribute, attributeIndex) {
            if (attributeIndex === 0) {
                return attribute + "='" + attributes[attribute] + "'";
            }
            return " " + attribute + "='" + attributes[attribute] + "'";

        })
        .reduce((output, htmlAttribute) => output + htmlAttribute, "");
};

module.exports.makeHtmlElementWithChild = function (tagName, child) {
    "use strict";

    return (
        "<" + tagName + ">" + "\n"
            + child + "</" + tagName + ">"
    );
};

module.exports.addLine = function (text, numberOfSpaces = 0) {
    function makeIndentation(numberOfSpacesToAdd) {
        if (numberOfSpacesToAdd === 0) {
            return "";
        }
        return " " + makeIndentation(numberOfSpacesToAdd - 1);
    }
    if (numberOfSpaces === 0) {
        return "\n";
    }
    const indentation = makeIndentation(numberOfSpaces);
    return indentation + text + "\n";
};
