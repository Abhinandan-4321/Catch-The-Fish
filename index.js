let start = document.querySelector("#start")
let clickAudio = new Audio("./assets/click-for-game-menu-131903.mp3")
start.addEventListener("click", ()=>{
    location.href = "./instructions.html"
})

let iBtn = document.querySelector("#credits")
let hover = document.querySelector("#hover")
hover.style.display = "none"

iBtn.addEventListener("mouseover",()=>{
    hover.style.display = "block";
})

iBtn.addEventListener("mouseout",()=>{
    hover.style.display = "none"
})