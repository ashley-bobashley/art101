//Ashley Stelljes <cstellje@ucsc.edu>
//April 23 2024

// Functions

//This function takes input from the user, generally a name, then sorts it and outputs the sorted version.
function inputAlphabetizer() {
  //Get input and verify
  let userName = prompt("Please enter some text you'd like to be alphabetized");
  console.log("username = ", userName);

  //Convert string to array and verify
  let nameArray = userName.split('');
  console.log("nameArray = ", nameArray);

  //Sort the array and verify
  let nameArraySorted = nameArray.sort();
  console.log("nameArraySorted = ", nameArraySorted);

  //Convert sorted array back into a string
  let nameSorted = nameArraySorted.join('');
  console.log("nameSorted = ", nameSorted);

  //Output result
  return nameSorted;
}

//Begin Program Code
document.writeln("Your input has been alphabetized: ", inputAlphabetizer(), "</br>");
