//Ashley Stelljes <cstellje@ucsc.edu>
//April 23 2024

//Define Variables
const myTransport = ["Kia Forte", "Bus", "Walking"];

//Define Objects
const myMainRide = {
  make: "Kia",
  model: "Forte",
  year: 2016,
  color: "grey",
  age: function() {
    return 2024 - this.year;
  }
}

//Code
document.writeln("Getting Around: " + myTransport + "<br>");
document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");