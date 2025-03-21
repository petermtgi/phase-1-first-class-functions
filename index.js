// Function that receives a callback and calls it
const receivesAFunction = (callback) => {
    callback();
  };
  
  // Function that returns a named function
  const returnsANamedFunction = () => {
    return function namedFunction() {
      console.log("This is a named function!");
    };
  };
  
  // Function that returns an anonymous function
  const returnsAnAnonymousFunction = () => {
    return () => console.log("This is an anonymous function!");
  };
  
  // Export functions for testing
  module.exports = { receivesAFunction, returnsANamedFunction, returnsAnAnonymousFunction };
  