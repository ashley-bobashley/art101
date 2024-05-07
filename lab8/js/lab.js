//Ashley Stelljes <cstellje@ucsc.edu>
//May 6th 2024

// Declare Functions
// This function multiplies the number inputted to it by 13.679, saves the result, then returns the result
function multiply(x){
  let results = x * 13.679;
  return results;
}

// Declare Variables
let numArray = [1, 2, 7, 19, 36, 45, 81, 92, 75];
let mapResults = numArray.map(multiply);

// Code
numArray.map(multiply);
numArray.map(function(x){
  let results = x / 2;
  return results;
})

//Output
console.log("numArray.map(multiply) Results: ", mapResults);
$("#output").html(mapResults);