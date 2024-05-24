//Ashley Stelljes <cstellje@ucsc.edu>
//May 23th 2024

// Declare Functions
// This function returns a Hogwarts class based on the number of characters in the inputted string.
function sortingHat(string){
  // Counts the number of characters in a string
  let length = string.length;
  let mod = length % 4;
  // Compare length to determine class
  if (mod==0){
    return "Gryffindor";
  } else if (mod==1){
    return "Ravenclaw";    
  } else if (mod==2){
    return "Slytherin";    
  } else if (mod==3){
    return "Hufflepuff";    
  } else {
    return "Error";
  }
}

// Calls back to the sortingHat function when a button is pressed
$("#button").click(function(){
  // Get user input and store it as a constant
  const input = $("#input").val();
  // Assigns the input a class
  const house = sortingHat(input);
  // Reveals the input's class and appends it to the #output div
  $("#output").append('<div class="text"><p>' + "The Sorting Hat has sorted you into " + house + '</p></div>');
});