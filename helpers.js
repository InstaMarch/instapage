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