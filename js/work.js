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
    .from(".sectionHeading",{
        y: 500,
        duration:1.5,
        ease : "power2.out"
    }, "start")

    .from(".card", {
        duration: 1, 
        y:-1500,
        stagger:0.5
    }, "start")

    .from(".dateAndTime", {
        duration : 1.4,
        y : -50,
        ease : "bounce.out"
    }, "abc")

    .from(".btnWrapper", {
        opacity:0,
        duration:1.5
    }, "abc")

    .to(".instagram", {
        duration: 0.3,
        opacity:1,
    })

    .to(".linkedin", {
        duration: 0.3,
        opacity:1,
    })

    .to(".github", {
        duration: 0.3,
        opacity:1,
    })
    