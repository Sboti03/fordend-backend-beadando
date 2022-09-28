import './style.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import '../node_modules/bootstrap/dist/css/bootstrap.css'



let borderColor;
let borderWidth;

let darkModeOn;
let imgWidth;

function generate() {
    document.getElementById('output').src = document.getElementById('pic-url').value
    document.getElementById('output').style.border = borderColor + " solid " + borderWidth + "px";
}

function borderColorChange(e) {
    borderColor = e.target.value
    console.log(borderColor)
    document.getElementById('output').style.border = borderColor + " solid " + borderWidth + "px";
}


function borderChange(e) {
    borderWidth = e.target.value
    document.getElementById('output').style.border = borderColor + " solid " + borderWidth + "px";
    
}

function widthChange(e) {
    imgWidth = e.target.value 
    document.getElementById('output').width = imgWidth
}

function darkMode(e) {
    if(darkModeOn) {
        document.body.classList.remove("dark-mode")
        e.target.textContent = "Sötét mód"
    } else {
        console.log("asd")
        document.body.classList.add("dark-mode")
        e.target.textContent = "Világos mód"
    }
    darkModeOn = !darkModeOn
}

function init() {
    document.getElementById('generate').addEventListener('click', generate)
    document.getElementById('border-color').addEventListener('input', borderColorChange)
    document.getElementById('pic-border').addEventListener('input', borderChange)
    document.getElementById('pic-width').addEventListener('input', widthChange)
    borderColor = "black"
    borderWidth = 1
    imgWidth = 1000
    document.getElementById('dark-mode').addEventListener('click', darkMode)
    darkModeOn = false;
    
}




document.addEventListener('DOMContentLoaded', init)