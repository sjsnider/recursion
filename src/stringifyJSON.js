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
  			if (Array.isArray(recurseObj)){
  				for (var i=0; i<recurseObj.length; i++) {
  					loopString += recurse(recurseObj[i]) + ',';
  				}
  			}
  			else {
  				for (var i in recurseObj){
  					// dont' call the recursive function if the value of this property is a function or undefined, they are nonstringifiable
  					if (typeof recurseObj[i] !== 'function' && typeof recurseObj[i] !== 'undefined')
  						loopString += '"' + i + '":' + recurse(recurseObj[i]) + ',';
  				}
  			}
  			loopString = loopString.slice(0,-1);
  			if (Array.isArray(recurseObj)){
  				loopString = '[' + loopString + ']';
  			}
  			else {
  				loopString = '{' + loopString + '}';	
  			}
  			string = loopString;
  		}
  	}
  	return string;
  }
  var finalString = recurse(obj);
  return finalString;
};

// checks if an object has any properties
function isEmpty(map) {
   for(var key in map) {
      if (map.hasOwnProperty(key)) {
         return false;
      }
   }
   return true;
}