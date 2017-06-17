var test = require('tape');
var app = require('../app.js');
 
test('make-h1', function (t) {
    t.plan(1);
    t.equal(
        app.makeTag("h1", "InstaMarch: The Imaginary Jobs Program"),
        "<h1>InstaMarch: The Imaginary Jobs Program</h1>"
    );
});
