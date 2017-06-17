/*jslint
    browser, es6
*/

//Original Author called this file elements.js

const attributeExceptions = [
    `role`
];

function appendText(el, text) {
    const textNode = document.createTextNode(text);
    el.appendChild(textNode);
}

function appendArray(el, children) {
    children.forEach((child) => {
      if (Array.isArray(child)) {
        appendArray(el, child);
      } else if (child instanceof window.Element) {
        el.appendChild(child);
      } else if (typeof child === "string") {
      	appendText(el, child);
      }
    });
}

function setStyles(el, styles) {
  if (!styles) {
    el.removeAttribute(`styles`);
    return;
  }

  Object.keys(styles).forEach((styleName) => {
    if (styleName in el.style) {
      el.style[styleName] = styles[styleName]; // eslint-disable-line no-param-reassign
    } else {
      console.warn(`${styleName} is not a valid style for a <${el.tagName.toLowerCase()}>`);
    }
  });
}


function makeElement(type, textOrPropsOrChild, ...otherChildren) {
   //"use strict";
    const el = window.document.createElement(type);
	
    if (Array.isArray(textOrPropsOrChild)) {
      appendArray(el, textOrPropsOrChild);
    } else if (textOrPropsOrChild instanceof window.Element) {
      el.appendChild(textOrPropsOrChild);	
    } else if (typeof textOrPropsOrChild === "string") {
      appendText(el, textOrPropsOrChild);
    } else if (typeof textOrPropsOrChild === "object") {
      Object.keys(textOrPropsOrChild).forEach((propName) => {
      if (propName in el || attributeExceptions.includes(propName)) {
          const value = textOrPropsOrChild[propName];

	  if (propName === "style") {
	      setStyles(el, value);
	  } else if (value) {
	      el[propName] = value;
	  }
      } else {
        console.warn(`${propName} is not a valid property of a <${type}>`); 
      }
      });
    }

	if (otherChildren) appendArray(el, otherChildren);

	return el;
}

const h1 = (...args) => makeElement(`h1`, ...args);
const h2 = (...args) => makeElement(`h2`, ...args);
const a = (...args) => makeElement(`a`, ...args);
const button = (...args) => makeElement(`button`, ...args);
const div = (...args) => makeElement(`div`, ...args);
const header = (...args) => makeElement(`header`, ...args);
const p = (...args) => makeElement(`p`, ...args);
const span = (...args) => makeElement(`span`, ...args);

/* Simple brute force way..

document.body.appendChild(
  div({ id: `app` },
    header({ className: `header` },
      h1({ className: `header__title` }, `Know It All`),
      a(
        {
          className: `header__help`,
          target: `_blank`,
          rel: `noopener noreferrer`,
          title: `Find out more about know it all`,
          href: `https://hackernoon.com/what-you-dont-know-about-web-development-d7d631f5d468#.ex2yp6d64`,
        },
        `What is this?`
      )
    ),
    div({ className: `skill-table` })
  )
);
*/

/* 
  Compentents  are just fuctions named with Capital letters
*/
const Header = props => (
  header({ className: `header` },
    h1({ className: `header__title` }, `Know It All`),
    a(
      {
        className: `header__help`,
        target: `_blank`,
        rel: `noopener noreferrer`,
        title: `Find out more about know it all, version ${props.version}`,
        href: `https://hackernoon.com/what-you-dont-know-about-web-development-d7d631f5d468#.ex2yp6d64`,
      },
      `What is this?`
    )
  )
);
const Table = props => div({ className: `skill-table` }, props.rows);


// data would be passed in from render function
const toggleRow = data => null;

const expandOrCollapseRow = (e, data) =>(status("got here"));


const TableRow = (initialData) => {
  let el = null;

  // called when the component is called
  const render = data => (
    div(
      { className: `table-row` },
      div(
        {
          className: `table-row__content`,
          onclick: () => toggleRow(data),
        },
        button(
          { onclick: e => expandOrCollapseRow(e, data) },
          `click me`
        ),
        p(data.name)
      )
    )
  );

  // when the data changes, update() will be called with the new data
  const update = (prevEl, newData) => {
    const nextEl = render(newData);

    if (nextEl.isEqualNode(prevEl)) {
      console.warn(`render() was called but there was no change in the rendered output`, el);
    } else {
      prevEl.parentElement.replaceChild(nextEl, prevEl);
    }

    return nextEl;
  };

  el = render(initialData);

  // the store will call this when data has changed that will affect this component
  initialData.store.listen(initialData.id, (newData) => {
    el = update(el, newData);
  });

  return el;
};


const Store => (
  callbacks = [];
  dataStore = [];

  const listen = (id,fn,data) => (
    callback[id] = fn( dataStore[id] );
  )
  
  const informAll = () => (
    callbacks.forEach(cb) => cb(data); 

  )
);

//////////////////////////////////
// Must build the App from properties which are passed to
// helper functions such as div() which returns DOM elements
// that are endowed with 
//////////////////////////////////
const App = props => (
  div({ id: `app` },
    TableRow({id: 001,store: globalStore}),
    Header({ version: props.version }),
    Table({ rows: props.rows })
  )
);

// exports is in common.js modules
if (typeof document === 'undefined'){
  exports.App=App;
}

// If called from client..
if (typeof document !== 'undefined'){
  document.body.appendChild(App({
    version: 002,
    rows:3
  }));
}