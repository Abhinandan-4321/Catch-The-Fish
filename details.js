document.addEventListener("DOMContentLoaded", function() {
    let playButton = document.querySelector("#play");

    playButton.addEventListener("click", function() {
        var yourname = document.querySelector(".entername");
        var Gname = document.querySelector(".enterGname");

        if (yourname.value.trim() === '' || Gname.value.trim() === '') {
            alert("Please Enter your Details");
        } else {
            localStorage.setItem('gstore', Gname.value);
            location.href = "./game.html";
        }
    });
});

let bgm = new Audio("./assets/John_Bartmann_-_01_-_Mad_Hatter_Tea_Party(chosic.com).mp3")
bgm.loop = true;
bgm.play()