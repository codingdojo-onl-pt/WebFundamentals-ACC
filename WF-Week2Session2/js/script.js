console.log("Testing the linking of JS file")

var theHeader = document.getElementsByTagName('header')
console.log(theHeader)
// If I wanted the below function to only work in 1 place I would use this

/*
function name() { 
}
declare a function give the name of name it requires no outside information { instructions start here}
if (x) {
}
if (the following is true) {follow these instructions}
for(let i= 0; i < 10; i++) {
}
for loops (where to start; where to end; how to proceed) {follow these instructions}
*/


function bgChange(element) {
    console.log("You just clicked the header")
    if(element.style.backgroundColor = '#ffe4c48a') {
        element.style.backgroundColor = '#ffe4c4'
    }
}

function hideProfile(element) {
    console.log("You clicked the profile pic")
    // element.style.zIndex = '3'
    element.style.display = 'none'
}

for(let i= 0; i < 10; i++) {
    console.log("The Value of i is:", i)
}

for(let i= 0; i <= 10; i++) {
    if(i % 2 == 0) {
        console.log("I is currently: ", i)
    }
}

function octoClick() {
    console.log("You clicked the Octocat")
    alert("You clicked the BookWorm Octocat")
    console.log("You closed the alert box")
}


function showData() {
    var name = document.details.name.value
    var location = document.details.location.value
    console.log("You submitted the following in the form to an alert box: ", name, location)
    alert("My name is " + name + ' and my location is ' + location)
}

// Line 51 = Created a function to show the data from the form
// Line 52 = We are looking at the document for something with the name of details for a key of name and adding the value from it to the var called name
// Line 53 = We are looking at the document for something with the name of details for a key of location and adding the value from it to the var called location
// Line 54 = We are printing to the console a statement that includes the values that we have gathered
// Line 55 = We are taking those same values that we gathered and now adding them along with some strings to an alert box that will pop up.
// Line 56 = Ending of function showData instructions

function calculator() {
    var grade1=parseFloat(document.getElementById('qtr1').value);
    var grade2=parseFloat(document.getElementById('qtr2').value);
    var grade3=parseFloat(document.getElementById('qtr3').value);
    var grade4=parseFloat(document.getElementById('qtr4').value);
    var sum=grade1+grade2+grade3+grade4;
    var total=sum/4
    console.log("Grades entered", grade1, grade2, grade3, grade4)
    console.log("Sum of all grades", sum)
    console.log("The final total/average", total)
    var display=document.getElementById('outputh4');
    display.innerHTML='Your Final Grade Is: ' +total;
    var color = document.querySelector('h4')
    if (total >= 90) {
        color.style.color = "green"
    } else if (total >= 80) {
        color.style.color = "orange"
    } else if (total >= 70) {
        color.style.color = 'red'
    } else {
        color.style.color = 'black'
    }
}

// Line 39 = creating the function called calculator
// Line 40-43 = creating the variables for the 4 grades to be entered by selecting them by their id and changing the format back to a integer from a string
// Line 44 = creating the sum var and adding all the grades together
// Line 45 = calculating the average in a var called total
// 46-48 = Printing to the console all the grades, the sum and the final total
// Line  49 = creating a var named display and selecting the h4 element
// Line 50 = Adding to the h4 element the string and the final total
// Line 51 = creating a var called color and selecting the same element
// Line 52-59 = Creates a conditional that based on what the value of total is will change the text color
// Line 60 = Ends our conditional
// Line 61 = Ends our function