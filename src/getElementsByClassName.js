// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  var nodeList = [];
  function checkClassName(node) {
    if (node.classList && node.classList.contains(className)) {
      nodeList.push(node);
    };
    if (node.hasChildNodes) {
      for (var childnode of node.childNodes) {
        checkClassName(childnode);
      }
    }
  }
  checkClassName(document.body);
  return nodeList;
};
