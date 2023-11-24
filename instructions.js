let nextButton = document.querySelector("#next")
nextButton.addEventListener("click",()=>{
    location.href = "./details.html"
})
//Audio
let bgm = new Audio("./assets/cottagecore-17463.mp3")
bgm.loop = true;
bgm.play()