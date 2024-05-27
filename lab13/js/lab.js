//Ashley Stelljes <cstellje@ucsc.edu>
//May 23th 2024

// Create Output Variable
let outputStr = "";

// Declare Functions
// This function prints out numbers from 1 to 200, unless they are a multiple of 3, 5, or 7. Multiples of 3 will instead print out Fizz!, multiples of 5 will instead print out Buzz!, and multiples of 7 will instead print out Boom! Multiples of both 3 and 5 will instead print out FizzBuzz!, multiples of both 3 and 7 will instead print out FizzBoom!, and multiples of 5 and 7 will instead print out BuzzBoom! Multiples of 3, 5, AND 7 will instead print out FizzBuzzBoom!
function fizzBuzzBoom(){
  for (i=1; i<=200; i++){
    // Calculate and Create Output
    if (i%105 == 0){
      outputStr+="FizzBuzzBoom!\n";
    } else if (i%35 == 0){
      outputStr+="BuzzBoom!\n";
    } else if (i%21 == 0){
      outputStr+="FizzBoom!\n";
    } else if (i%15 == 0){
      outputStr+="FizzBuzz!\n";
    } else if (i%3 == 0) {
      outputStr+="Fizz!\n";
    } else if (i%5 == 0){
      outputStr+="Buzz!\n";
    } else if (i%7 == 0){
      outputStr+="Boom!\n";
    } else {
      outputStr+=i;
      outputStr+="\n";
    }
  }
}

// Calls back to the fizzBuzzBoom function when a button is pressed
$("#button").click(function(){
  fizzBuzzBoom();
  // Outputs the result of the fizzBuzzBoom function
  $("#output").append('<div class="text"><p>' + outputStr + '</p></div>');
});