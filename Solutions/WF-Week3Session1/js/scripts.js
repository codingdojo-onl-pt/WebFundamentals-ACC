console.log("checking connections")

var logoImg = document.getElementById('logo')

function leftSwitch() {
    console.log("clicked left arrow")
    logoImg.src='./images/logo02.jpg'
}

function rightSwitch() {
    console.log("clicked right arrow")
    logoImg.src='./images/logo.jpg'
}

function addAlert() {
    console.log("you clicked submit")
    alert('Your information was sent')
}

function hideText(element) {
    console.log("clicked products")
    element.classList.add('hide')
}