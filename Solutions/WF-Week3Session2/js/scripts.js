function addName(arr) {
    for(var i = 0; i < arr.length; i++){
        var node = document.createElement('li')
        var name = document.createTextNode(arr[i])
        node.appendChild(name)
        document.getElementById('list').appendChild(node)
    }
}
// addName(someToons01)

var images = document.getElementById('images')
var newImages = ''

function addImg(arr) {
    console.log(arr)
    for(var i = 0; i < arr.length; i++) {
        newImages += '<img src="'+arr[i]+'" alt="name" />'
    }
    images.innerHTML += newImages
}

var combo = document.getElementById('combo')
var comboImg = ''
var comboName = ''

function combine(name, img) {
    for(let n = 0; n < name.length; n++) {
        comboName = '<h3>'+name[n]+'</h3>'
    }
    for(let i = 0; i < img.length; i++) {
        comboImg = '<img src"'+img[i]+'" alt="name"/>'
    }
    combo.innerHTML += comboName + comboImg
}