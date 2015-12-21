# is-dom-element
Checks whether the DOM node passed is of type element. The module should be used in an environment that has DOM API available.

## Dependencies
No dependencies are needed.

## Usage
```
var isDOMElement = require('is-dom-element');

//	Pass a string
if (isDOMElement('my-node')) {
	//	is valid DOM element
}

//	Pass a DOM node
var myNode = document.querySelector('my-node');

if (isDOMElement('my-node')) {
	//	is valid DOM element
}
```


