let nextButton = document.querySelector("#next")
nextButton.addEventListener("click",()=>{
    location.href = "./details.html"
})

let bgm = new Audio("./assets/John_Bartmann_-_01_-_Mad_Hatter_Tea_Party(chosic.com).mp3")
bgm.loop = true;
bgm.play()