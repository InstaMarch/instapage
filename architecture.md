#Instapage Architecture (ver. alpha-001)

## Theory of Operation
Instapage is an exploration of static site generation.

It currently generates nested HTML components
(aka tags) via makeTag();  A tag may be a container for either:

-- a string
-- an array of tags

In the case of a string, addLine(str,numberOfSpaces) is called where
numerOfSpaces sets the cosmetic indent level of the resulting HTML text.
It is currently an experimental feature.

## Example of how to use Instapage
    const {makeTag} = require("../app");
    const container = makeTag("div", {
        "class": "container"
    },
        makeTag("header", {}, "InstaMarch")
    );

    const html = makeTag("html", {},
        [
        makeTag("head", {},
            [
            makeTag("link", {
                rel: "stylesheet",
                href: "index.css"
            },""
            )
            ]),
        makeTag("body", {}, container)
    ]);

    process.stdout.write(html);

## Function summary

### helper.js
    makeAttributesHtml = function (attributes)
    makeHtmlElementWithChild = function (tagName, child)
    addLine = function (text, numberOfSpaces = 0)

## app.js
    // child is string or an array
    makeTag = function (tagName, attributes, child)
    makePage = function (body ="")
