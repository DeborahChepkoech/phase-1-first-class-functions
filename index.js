// Function that takes a callback and calls it
function receivesAFunction(callback) {
    callback();
  }
  
  // Function that returns a named function
  function returnsANamedFunction() {
    function namedFunction() {
      console.log("I am a named function!");
    }
    return namedFunction;
  }
  
  // Function that returns an anonymous function
  function returnsAnAnonymousFunction() {
    return function () {
      console.log("I am an anonymous function!");
    };
  }
  
  
  receivesAFunction(() => console.log("Callback executed!")); 
  
  const namedFunc = returnsANamedFunction();
  namedFunc(); 
  
  const anonymousFunc = returnsAnAnonymousFunction();
  anonymousFunc(); 
  