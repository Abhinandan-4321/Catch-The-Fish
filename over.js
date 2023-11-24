let again = document.getElementById("again")
again.addEventListener("click",()=>{
    location.href = "./game.html"
})
// retrieving stored nickname
updated = document.getElementById("Scoreto")
let storedscore = localStorage.getItem("score")
console.log("the score is",storedscore)
updated.innerHTML = storedscore;

let sn = localStorage.getItem("gstore")

let upn = document.getElementById("storedname")
upn.innerHTML = sn;
