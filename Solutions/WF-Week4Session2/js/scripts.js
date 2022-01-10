var dog = "https://random.dog/woof.json"
var api = "https://aws.random.cat/meow"
var toon = "https://looney-toons-api.herokuapp.com/api/characters"

async function getToon() {
    var response = await fetch(`${toon}`)
    var data = await response.json()
    console.log("full api data", data)
    console.log("narrowing it down", data.data)
    console.log("showing 1 index", data.data[10])
    var result = document.getElementById('toon')
    result.innerHTML = '<img src="'+data.data[12].img+'" alt="images">'
}
async function getDog() {
    var response = await fetch(`${dog}`)
    var data = await response.json()
    console.log("full api data", data)
    var result = document.getElementById('dog')
    result.innerHTML = '<img src="'+data.url+'" alt="images">'
}
async function getCat() {
    var response = await fetch(`${api}`)
    var data = await response.json()
    console.log("full api data", data)
    var result = document.getElementById('cat')
    result.innerHTML = '<img src="'+data.file+'" alt="images">'
}