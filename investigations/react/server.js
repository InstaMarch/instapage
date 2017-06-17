fs = require('fs')
// Removed jsdom!!
//const jsdom = require("jsdom");  // jsdom is an object
//const { JSDOM } = jsdom; //JSDOM is function grabbed out of jsdom
//const App = require(`./components/App/App`);
const App = require(`./reactive-vanilla.js`).App; // works with export
const someData = { what: `eva` };

//global.document = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);

//
const appDom = App(someData);

const html = `<!DOCTYPE html>
<html>
  <head>
    <title>Know it all</title>
  </head>
  <body>
    ${appDom.outerHTML}
    <script>
      window.SOME_DATA = ${JSON.stringify(someData)};
    </script>
    <script src="app.js"></script>
  </body>
</html>
`;


// a little web server
const express = require(`express`);
const server = express();

server.get(`/`, (req, res) => {
  res.send();
});

server.get(`/init`, (req, res) => {
  res.send(html);
});


server.get(`/help`, (req, res) => {
  fs.readFile('./html/help.html', 'utf8',
  res.send(html);
});


server.listen(8080); // callbacks are for wimps