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

let arr = [
    "Better luck next Time",
    "Good Effort",
    "You really nailed it",
    "Keep Practicing",
    "You're getting better"
]
function random(){
let x;
x = Math.floor(Math.random() * arr.length)    // created an array and added text to it and using random function to display random text from the array
return x;
}
let rtext = document.getElementById("randomtxt")
rtext.innerHTML = `${arr[random()]}!!, ${sn} `
