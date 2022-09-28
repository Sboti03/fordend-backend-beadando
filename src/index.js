import './style.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import '../node_modules/bootstrap/dist/css/bootstrap.css'


let imgOut;

let borderColor;
let borderWidth;

let darkModeOn;

function generate() {
    imgOut.src = document.getElementById('pic-url').value
}

function borderColorChange(e) {
    borderColor = e.target.value
    console.log(borderColor)
    imgOut.style.border = borderColor + " solid " + borderWidth + "px";
}


function borderChange(e) {
    borderWidth = e.target.value
    imgOut.style.border = borderColor + " solid " + borderWidth + "px";
}

function widthChange(e) {
    imgOut.width = e.target.value + " px"
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
    imgOut = document.getElementById('output')
    borderColor = "black"
    borderWidth = 1
    document.getElementById('dark-mode').addEventListener('click', darkMode)
    darkModeOn = false;
    
}




document.addEventListener('DOMContentLoaded', init)