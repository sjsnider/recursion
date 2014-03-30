// this is what you would do if you liked things to be easy:
//var stringifyJSON = JSON.stringify;
//console.log(stringifyJSON);

// but you don't so you're going to have to write it from scratch:

var stringifyJSON = function (obj) {
  var recurseString = "";

  function recurse (recurseObj) {
  //	console.log(typeof recurseObj);
  	var string = "";
  	//handles numbers and booleans
  	if (typeof recurseObj === 'number' || typeof recurseObj === 'boolean')
  		string += recurseObj;
  	// handles null
  	else if (recurseObj === null )
  		string += null;
  	// handles strings
  	else if (typeof recurseObj === 'string')
  		string += '"' + recurseObj + '"';
  	// handles objects
  	else if (typeof recurseObj === 'object'){
  		if(recurseObj.length === 0)
  			string += '[]';
  		// check if the object contains any properties
  		else if (isEmpty(recurseObj))
  			string += '{}';
  		else {
  			var loopString = "";
  			for (var i in recurseObj){
  				loopString += recurse(recurseObj[i]) + ',';
  			}
  			loopString = loopString.slice(0,-1);

  			loopString = '[' + loopString + ']';
  			string = loopString;
  		}
  	}
  	return string;
  }
  var finalString = recurse(obj);
  return finalString;
};

// checks if an object has an properties
function isEmpty(map) {
   for(var key in map) {
      if (map.hasOwnProperty(key)) {
         return false;
      }
   }
   return true;
}