// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

// The nested function is invoked inside of the function myFunction, which gives the nested function access to the complete lexical environment of the myFunction Function.  

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */


let counter = makeCounter();
function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}


console.log(counter());
console.log(counter())

