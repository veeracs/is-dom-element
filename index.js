'use strict';

/**
 * Checks if a node passed is a DOM Element
 *
 * @param {targetNode} DOM node
 * @return {Boolean}
 */

module.exports = function (targetNode) {
	return Node.ELEMENT_NODE === targetNode.nodeType;
};
