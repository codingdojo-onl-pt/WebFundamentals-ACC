// create a variable to hold your name
// create a variable to hold a basic greeting
// print a message that includes both your name and greeting
// Ninja Bonus: print a different message if the name is "Steve"
// Ex (greeting is "Hello World")
//  if name is "Steve" print:
//      "Steve here AKA the Stevenator, just wanted to say Hello World"
//  if name is not "Steve" print:
//      "Jane here, just wanted to say Hello World"

function greet(){
    // YOUR CODE HERE
}

// TEST
console.log(greet());


// COPY ABOVE THIS LINE TO PRESENT ALGO TO STUDENTS
// SOLUTION BELOW

function greet(){
    var name = "Jason";
    var greeting = "Hello, World!";
    return name + "says: " + greeting;
}

// SOLUTION WITH NINJA BONUS

function greet(){
    var name = "Jason";
    var greeting = "Hello, World";
    if(name === "Steve"){
        return `${name} here, AKA the Stevenator, just wanted to say ${greeting}`;
    } else {
        return `${name} says: ${greeting}`;
    }
}

