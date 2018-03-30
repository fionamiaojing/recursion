// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (obj === null) {
    return 'null';
  } else if (obj === undefined) {
    return undefined;
  } else if (typeof obj === 'boolean') {
    return obj === true? 'true':'false';
  } else if (typeof obj === 'number') {
    return obj.toString();
  } else if (typeof obj === 'string') {
    return '"' + obj.replace(/"/g, "'") + '"';
  } else if (obj.constructor === Array) {
    var result = [];
    for (var i = 0; i < obj.length; i++) {
      if (obj[i] === undefined) {
        result.push(null)
      } else {
        result.push(stringifyJSON(obj[i]));
      }
    }
    return '[' + result.join(',') + ']';
  } else if (obj.constructor === Object) {
    var result = [];
    for (var key in obj) {
      if (stringifyJSON(obj[key]) === undefined) {
        continue;
      } else {
        result.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }
    }
    return '{' + result.join(',') + '}';
  }
};
