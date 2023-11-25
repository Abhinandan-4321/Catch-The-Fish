// timer
let timer = document.getElementById("timer")
let time = 60;
    let timerun = setInterval(function()
    {
        // timer.innerHTML = time
        time--;
        if (time == 0) 
        {
            location.href = "./gameover.html";
        }
        timer.innerHTML=time
        
    }, 1000);


//cursor
const cursor = document.querySelector(".cursor img")
window.addEventListener("mousemove", (e)=>{                        // pageY i.e. position of the cursor from the top of the page
    cursor.style.top = e.pageY + "px";                             // pageX i.e position of the cursor from the left of the page              
    cursor.style.left = e.pageX + "px";
    
})

// restart button
let restart = document.getElementById("restart")
restart.addEventListener("click",()=>{
    location.href = "./game.html"
})


const bubbles = [...document.querySelectorAll(".bubble")]          //this ... method is used to a list of elements into an array
var score = 0;
let Uscore = document.getElementById("sb")

    function starting(){
        console.log("hello")
        let i = Math.floor(Math.random() * bubbles.length);        // for choosing divs at random 
        let bubble = bubbles[i]
        let timetrack ;

        const img = document.createElement("img");                 // creating an image element and adding the fish image to it 
        img.classList.add("fish");
        img.src = "./assets/Fish.png"

        bubble.appendChild(img);                                  // apending the image tag to the class bubble
        timetrack = setTimeout(()=>{
            if(bubble.contains(img)){                             // this checks if the bubble div contains the image element
                bubble.removeChild(img)
                starting()
            }
        }, 800)
    }

    document.querySelectorAll('.bubble').forEach((bubbleElement)=>{
        bubbleElement.addEventListener('click',(event) => {
            if (bubbleElement.contains(document.querySelector('.fish'))) {
                // document.querySelector('.fish')

                bubbleElement.innerHTML = `<img src="./assets/Fishclick.png" class="bottle">`;    // changing fish image when the fish image is clicked
                
                setTimeout(() => {
                    bubbleElement.innerHTML = '';              //removing the changed image after the given time
                    score += 1;
                    localStorage.setItem("score", score); // score storage
                    starting();
                    Uscore.innerHTML = score
                },300)
                
                // console.log('score is',score)
               
               
            }
        })
    })

    starting();
    console.log(score)
// name storage
let pp = localStorage.getItem("gstore")
let tt = document.getElementById("ns")
tt.innerHTML = pp

//bg music
let bgm = new Audio("./assets/cottagecore-17463.mp3")
bgm.loop = true;
bgm.play()


