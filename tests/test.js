var test = require('tape');
 
test('timing test', function (t) {
    t.plan(1);
    
    t.equal(makeTag("h1", "InstaMarch: The Imaginary Jobs Program"),"<h1>InstaMarch: The Imaginary Jobs Program</h1>");
});
