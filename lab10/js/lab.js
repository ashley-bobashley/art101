//Ashley Stelljes <cstellje@ucsc.edu>
//May 16th 2024

// Declare Functions
// This function randomly generates filler text from the Lorem Ipsum block
function randomText() {
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const min = 3;
  const max = 100;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
  // Get a random starting index to slice the filler text
  const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
  // Generate the random filler text
  return text.slice(randStart, randStart + randLen);
}

// Calls back to the randomText function when a button is pressed
$("#talk").click(function(){
  const fillerText = randomText();
  // Adds the generated filler text into the output div
  $("#output").append('<div class="text"><p>' + fillerText + '</p></div>');
});