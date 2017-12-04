const {makeTag} = require("../app");
//const fs = require("fs");
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

/*fs.writeFile("index.html", html, function (error) {
 {
    if(error) {
        throw error;
    }
    console.log("website built");
});
*/
//console.log("website built");
