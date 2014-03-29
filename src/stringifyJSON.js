// this is what you would do if you liked things to be easy:
//var stringifyJSON = JSON.stringify;
//console.log(stringifyJSON);

// but you don't so you're going to have to write it from scratch:

var stringifyJSON = function (obj) {
  // your code goes here
  var recurseString = "";
 // console.log(obj);

  function recurse (recurseObj) {
  //	console.log(typeof recurseObj);
  	var string = "";
  	if (typeof recurseObj === 'number' || typeof recurseObj === 'boolean')
  		string += recurseObj;
  	else if (recurseObj === null )
  		string += null;
  	else if (typeof recurseObj === 'string')
  		string += '"' + recurseObj + '"';
  	else if (typeof recurseObj === 'object'){
  		if(recurseObj.length === 0)
  			string += '[]';
  		else {
  			var loopString = "";
  			for (var i in recurseObj){
  				loopString += recurse(recurseObj[i]) + ',';
  			//	delete recurseObj[i];
  				//console.log(recurseObj);
  				//recurse(recurseObj);
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

