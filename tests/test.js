/*jslint node, es6*/

const test = require("tape");
const app = require("../app.js");

test("make h1", function (t) {
    "use strict";
    t.plan(1);
    t.equal(
        app.makeTag("h1", {}, "InstaMarch: The Imaginary Jobs Program"),
        "<h1>InstaMarch: The Imaginary Jobs Program</h1>"
    );
});

test("make header component", function (t) {
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

test("make an h1 with a class attribute", function (t) {
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

test("make header component with attributes", function (t) {
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

test("make ul with multiple li elements", function (t) {
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

test("makes a tag with an invalid child", function (t) {
    "use strict";
    t.plan(1);
    t.equal(app.makeTag(
        "p",
        {},
        3
    ),
    ""
    )
});
