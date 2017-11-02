/*jslint node, es6*/

const test = require("tape");
const app = require("../app.js");

test("Make h1", function (t) {
    "use strict";
    t.plan(1);
    t.equal(
        app.makeTag("h1", {}, "InstaMarch: The Imaginary Jobs Program"),
        "<h1>InstaMarch: The Imaginary Jobs Program</h1>"
    );
});

test("Make header component", function (t) {
    "use strict";
    t.plan(1);
    t.equal(
        app.makeTag(
            "header",
            {},
            "<h1>InstaMarch: The Imaginary Jobs Program</h1>"
        ),
        (
            "<header>\n"
            + "    <h1>InstaMarch: The Imaginary Jobs Program</h1>\n"
            + "</header>"
        )
    );
});

test("Make an h1 with a class attribute", function (t) {
    "use strict";
    t.plan(1);
    t.equal(
        app.makeTag("h1", {
            "class": "page-title"
        }, "InstaMarch: The Imaginary Jobs Program"),
        "<h1 class='page-title'>InstaMarch: The Imaginary Jobs Program</h1>"
    );
});

test("Make an h1 with two attributes", function (t) {
    "use strict";
    t.plan(1);
    t.equal(
        app.makeTag("h1", {
            "class": "page-title",
            "id": "tag-id"
        }, "InstaMarch: The Imaginary Jobs Program"),
        "<h1 class='page-title' id='tag-id'>"
                + "InstaMarch: The Imaginary Jobs Program"
                + "</h1>"
    );
});

test("Make header component with attributes", function (t) {
    "use strict";
    t.plan(1);
    t.equal(
        app.makeTag(
            "header",
            {
                "class": "header",
                "id": "header"
            },
            "<h1>InstaMarch: The Imaginary Jobs Program</h1>"
        ),
        (
            "<header class='header' id='header'>\n"
            + "    <h1>InstaMarch: The Imaginary Jobs Program</h1>\n"
            + "</header>"
        )
    );
});

test("Make ul with multiple li elements", function (t) {
    "use strict";
    t.plan(1);
    t.equal(
        app.makeTag(
            "ul",
            {},
            [
                "<li>li element here</li>",
                "<li>li element here</li>"
            ]
        ),
        (
            "<ul>\n"
            + "    <li>li element here</li>\n"
            + "    <li>li element here</li>\n"
            + "</ul>"
        )
    );
});

test("Makes a tag with an invalid child", function (t) {
    "use strict";
    t.plan(1);
    t.equal(
        app.makeTag(
            "p",
            {},
            3
        ),
        ""
    );
});

test("Makes a basic page with a doctype", function (t) {
    "use strict";
    let document = "";
    document += "<!DOCTYPE html>";
    document += "<html>";
    document += "<body>";
    document += "</body>";
    document += "</html>";
    t.plan(1);
    t.equal(app.makePage(), document);
});

test("Makes a basic page with an H1 Element containing the text 'hello world'", function (t) {
    "use strict";

    let document = "";
    document += "<!DOCTYPE html>";
    document += "<html>";
    document += "<body>";
    document += "<h1>hello world</h1>";
    document += "</body>";
    document += "</html>";
    t.plan(1);

    const h1 = app.makeTag("h1", {}, "hello world");
    t.equal(app.makePage(h1), document);
});
