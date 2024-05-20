//Ashley Stelljes <cstellje@ucsc.edu>
//May 19th 2024

// Declare Functions
// This function takes an inputted string and sorts it alphabetically.
function sortString(inputString) {
  return inputString.split('').sort().join('');
}

// Calls back to the sortString function when a button is pressed
$("#submit").click(function(){
  // Get user input and store it as a constant
  const userName = $("#username").val();
  // Sorts the user's inputted information
  const userNameSorted = sortString(userName);
  // Adds the sorted user input into the output div
  $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});