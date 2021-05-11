// DISPLAY DATE
let isoString = new Date().toISOString();
const date = new Date(isoString);

const options = { month: "long", day: "numeric", year: "numeric" };

let dt = Intl.DateTimeFormat("en-US",options).format(date);

document.getElementById("date").innerText = dt

// DISPLAY TIME
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerText = h + ":" + m + ":" + s;
    setTimeout(startTime, 500);

    function checkTime(i) {
        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
    }
}
startTime();

// CARD EXPAND

let cards = document.querySelectorAll(".card");
let cardsInfo = document.querySelectorAll(".cardInfo");

cards.forEach((card) =>{
    card.addEventListener("mouseenter", function(){
        card.classList.add("cardExpand");

        cardsInfo.forEach((cardInfo) => {
            if(cardInfo.parentElement === card){
                cardInfo.style.visibility = "visible";
                cardInfo.style.transitionDelay = "0.2s";
            }
        });
        
    });

    card.addEventListener("mouseleave", function(){
        card.classList.remove("cardExpand");
        
        cardsInfo.forEach((cardInfo) => {
            if(cardInfo.parentElement === card){
                cardInfo.style.visibility = "hidden";
                cardInfo.style.transitionDelay = "0s";
            }
        });
        
    })
})


// REDIRECT
const viewatch = document.querySelector(".one");
viewatch.addEventListener("click", function(){
    window.open("https://viewatch0.web.app/");
});

const leafyFoods = document.querySelector(".two");
leafyFoods.addEventListener("click", function(){
    window.open("https://eager-jepsen-201e9e.netlify.app");
});

const colorFlipper = document.querySelector(".three");
colorFlipper.addEventListener("click", function(){
    window.open("https://epic-mccarthy-a604a1.netlify.app");
});

const spotify = document.querySelector(".four");
spotify.addEventListener("click", function(){
    window.open("https://spotify-4e923.web.app/");
});

const wordCounter = document.querySelector(".five");
wordCounter.addEventListener("click", function(){
    window.open("https://ecstatic-meninsky-6dc287.netlify.app");
});

const pcb = document.querySelector(".six");
pcb.addEventListener("click", function(){
    window.open("https://pcb-machine.netlify.app");
});

const particlePlay = document.querySelector(".seven");
particlePlay.addEventListener("click", function(){
    window.open("https://awesome-particle-play.netlify.app");
});

const amazon = document.querySelector(".eight");
amazon.addEventListener("click", function(){
    window.open("https://clone-amaz00n.web.app/login");
});

// animation
const timeline = gsap.timeline()

timeline
    .from(".workHeading",{
        x: -500,
        duration:1,
        ease : "power2.out"
    }, "start")

    .from(".card", {
        duration: 1, 
        y:-1000,
        stagger:0.5
    }, "start")

    .from(".dateAndTime", {
        duration : 1.4,
        y : -50,
        ease : "bounce.out"
        })
    // .from(".one",{
    //     y:-1000,
    //     duration:1,
    // }, "start")

    // .from(".two", {
    //     y: 1000,
    //     duration:1,
    // },"two")

    // .from(".three", {
    //     x:1000,
    //     duration: 1, 
    //     delay:0.5
    // })

    // .from(".five", {
    //     x:1000,
    //     duration: 1, 
    // },"two")

    // .from(".six", {
    //     y:-1000,
    //     duration: 1,
    // }, "start")

    // .from(".seven", {
    //     y:-1000,
    //     duration: 1,
    // })

    // .from(".eight", {
    //     x:1000,
    //     duration: 1, 
    //     delay:0.5
    // })

    // .from(".four", {
    //     y:-1000,
    //     duration: 1,
    // })

console.log(timeline.duration())