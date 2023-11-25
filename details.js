document.addEventListener("DOMContentLoaded", function() { // this function makes sure the function only runs after the DOM content is loaded
    let playButton = document.querySelector("#play");

    playButton.addEventListener("click", function() {
        var yourname = document.querySelector(".entername");
        var Gname = document.querySelector(".enterGname");

        if (yourname.value === '' || Gname.value === '') {
            alert("Please Enter your Details");
        } else {
            localStorage.setItem('gstore', Gname.value);
            location.href = "./game.html";
        }
    });
});
//Audio
let bgm = new Audio("./assets/cottagecore-17463.mp3")
bgm.loop = true;
bgm.play()