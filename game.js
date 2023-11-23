// timer
let timer = document.getElementById("timer")
let time= 2000
    let timerun = setInterval(function()
    {
        timer.innerHTML = time
        time--;
        if (time == 0) 
        {
            location.href = "./gameover.html";
        }
        timer.innerHTML=time
        
    }, 1000);


//cursor
const cursor = document.querySelector(".cursor img")
window.addEventListener("mousemove", (e)=>{                                    // pageY i.e. position of the cursor from the top of the page
    cursor.style.top = e.pageY + "px";                                         // pageX i.e position of the cursor from the left of the page              
    cursor.style.left = e.pageX + "px";
    
})

// restart button
let restart = document.getElementById("restart")
restart.addEventListener("click",()=>{
    location.href = "./game.html"
})


const bubbles = [...document.querySelectorAll(".bubble")]



var score = 0;
let Uscore = document.getElementById("sb")

    function run(){
        const i = Math.floor(Math.random() * bubbles.length);
        const bubble = bubbles[i]
        let timetrack = null;

        const img = document.createElement("img");
        img.classList.add("fish");
        img.src = "./assets/Fish.png"
        bubble.appendChild(img);
        timetrack = setTimeout(()=>{
            if(bubble.contains(img)){
                bubble.removeChild(img)
                run()
            }
        }, 1500)
    }

    document.querySelectorAll('.bubble').forEach((bubbleElement)=>{
        bubbleElement.addEventListener('click',(event) => {
            const clickedElement = event.target; 
            if (bubbleElement.contains(document.querySelector('.fish'))) {
                document.querySelector('.fish')
                bubbleElement.innerHTML =''
                score += 1;
                localStorage.setItem("score", score);
                // console.log('score is',score)
                run();
                Uscore.innerHTML = score
            }
        })
    })

    run();
    console.log(score)
// name storage
let pp = localStorage.getItem("gstore")
let tt = document.getElementById("ns")
tt.innerHTML = pp

//bg music
let bgm = new Audio("./assets/John_Bartmann_-_01_-_Mad_Hatter_Tea_Party(chosic.com).mp3")
bgm.loop = true;
bgm.play()


