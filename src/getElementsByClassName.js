// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  // your code here
  var array = [];
  
  	function recurse(node){
  		var nodes = node.childNodes;
  		
  		for (var i=0; i<nodes.length; i++ ){
  			if (typeof nodes[i].classList !== "undefined") {
  				if (nodes[i].classList.contains(className)){
					array.push(nodes[i]);
				}
				recurse(nodes[i]);
			}
		}
		
  	}

  	recurse(document.body);
  	return array;
};
