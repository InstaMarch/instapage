/*jslint node, es6*/

const test = require("tape");
const app = require("../app.js");

test("make-h1", function (t) {
    "use strict";
    t.plan(1);
    t.equal(
        app.makeTag("h1", "InstaMarch: The Imaginary Jobs Program"),
        "<h1>InstaMarch: The Imaginary Jobs Program</h1>"
    );
});

test("make-header", function (t) {
    "use strict";
    t.plan(1);
    t.equal(
        app.makeTag("header",
                "<h1>InstaMarch: The Imaginary Jobs Program</h1>"),
        (
            "<header>\n"
            + "    <h1>InstaMarch: The Imaginary Jobs Program</h1>\n"
            + "</header>"
        )
    );
});
