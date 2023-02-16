// ucFirst("john") == "John";

let newStr = str[0].toUpperCase() + str.slice(1);


// The easiest way out is to add a test for an empty string, like this:

 function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

alert( ucFirst("john") ); // John