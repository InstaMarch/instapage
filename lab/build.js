const {makeTag} = require("../app");
const fs = require("fs");

const html = makeTag("html", {},
    [
        makeTag("head", {}, 
            [
                makeTag("link", {
                    rel: "stylesheet",
                    href: "index.css"
                }, "SET"
                )
            ]),
        makeTag("body", {},
            makeTag("p", {}, "hello World")
        )
]);

fs.writeFile("index.html", html, function (error) {
    if(error) {
        throw error;
    }
    console.log("website built");
});
