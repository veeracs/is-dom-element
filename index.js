'use strict';

/**
 * Checks if a node passed is a DOM Element
 *
 * @param {Node} DOM
 * @return {Boolean}
 */

module.exports = function (selector) {
	var targetNode = selector;
	if (typeof selector === 'string' || selector instanceOf String) {
		targetNode = document.querySelector(selector);
	}
	return Node.ELEMENT_NODE === targetNode.nodeType;
};
