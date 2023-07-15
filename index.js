const characters = ["A","B","C","D","E","F","G",
                    "H","I","J","K","L","M","N",
                    "O","P","Q","R","S","T","U",
                    "V","W","X","Y","Z","a","b",
                    "c","d","e","f","g","h","i",
                    "j","k","l","m","n","o","p",
                    "q","r","s","t","u","v","w",
                    "x","y","z", "0", "1", "2", 
                    "3", "4", "5", "6", "7", "8",
                    "9","~","`","!","@","#","$",
                    "%","^","&","*","(",")","_",
                    "-","+","=","{","[","}","]",
                    ",","|",":",";","<",">",".",
                    "?","/"];

const letters = characters.slice(0, 52)
const numbers = characters.slice(52, 62)
const symbols = characters.slice(62)

let passElOne = document.getElementById("pass-el-one")
let passElTwo = document.getElementById("pass-el-two")
let alertEl = document.getElementById("alert")

function generateRandomPassword() {
    let randomPassOne = ""
    let randomPassTwo = ""
    let numElChk = document.getElementById("numbers-chk").checked
    let symElChk = document.getElementById("symbols-chk").checked
    let passElLen = document.getElementById("pass-length-input")
    let passLength = 15
    let list = letters

    if(passElLen.value){
        passLength = passElLen.value
    }

    if (numElChk){
        list = letters.concat(numbers)
    }

    if (symElChk) {
        list = letters.concat(symbols)
    }

    for (let i=0; i < passLength; i++){
        let randomIndexOne = Math.floor(Math.random()*list.length)
        let randomIndexTwo = Math.floor(Math.random()*list.length)
        randomPassOne += list[randomIndexOne]
        randomPassTwo += list[randomIndexTwo]
    }

    passElOne.textContent = randomPassOne
    passElTwo.textContent = randomPassTwo
    alertEl.textContent = "Click to copy to clipboard"
}

passElOne.onclick = function() {
    if(passElOne.textContent != ""){
        document.execCommand("copy")
    }
}

passElTwo.onclick = function() {
    if(passElOne.textContent != ""){
        document.execCommand("copy")
    }
}

passElOne.addEventListener("copy", function(event){
    event.preventDefault();
    if(event.clipboardData) {
        event.clipboardData.setData("text/plain", passElOne.textContent);
        alertEl.textContent = "Copied to clipboard!"
    }
})

passElTwo.addEventListener("copy", function(event){
    event.preventDefault();
    if(event.clipboardData) {
        event.clipboardData.setData("text/plain", passElTwo.textContent);
        alertEl.textContent = "Copied to clipboard!"
    }
})

function toggleDarkMode(){
    //#main, #heading, .higlight, .line, .password-box
    //.text-input, .switch
    let mainEl = document.querySelector("#main")
    let headingEl = document.querySelector("#heading")
    let higlightEl = document.querySelector(".highlight")
    let lineEl = document.querySelector(".line")
    let passBoxEl = document.querySelector(".password-box")
    let textInputEl = document.querySelector("#pass-length-input")
    let switchEl = document.querySelectorAll(".switch");
    let bodyEl = document.body;
    let toggleButton = document.getElementById("toggle-btn");

    bodyEl.classList.toggle("dark-mode");
    toggleButton.classList.toggle("dark-mode");
    mainEl.classList.toggle("dark-mode");
    headingEl.classList.toggle("dark-mode");
    higlightEl.classList.toggle("dark-mode");
    lineEl.classList.toggle("dark-mode");
    passBoxEl.classList.toggle("dark-mode");
    textInputEl.classList.toggle("dark-mode");
    switchEl.classList.toggle("dark-mode");

}