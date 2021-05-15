
// SELECT TYPING EFFECT
let about = document.getElementById("about");
let work = document.getElementById("work");
let skill = document.getElementById("skill");

let aboutType = document.querySelector(".aboutType");
let workType = document.querySelector(".workType");
let skillType = document.querySelector(".skillType");

// ABOUT
let typer = new autoTyper({
    selector: ".aboutType",
    words: ['"select"'],
    loop: false,
    delay: 60000,
    charSpeed: 150,
});

about.addEventListener("mouseenter", function(){
    typer.start();
})

about.addEventListener("mouseleave", function(){
    typer.stop();
    aboutType.innerText = "";

})

// WORK
let workTyper = new autoTyper({
    selector: ".workType",
    words: ['"select"'],
    loop: false,
    delay: 60000,
    charSpeed: 150,
});

work.addEventListener("mouseenter", function(){
    workTyper.start();
})

work.addEventListener("mouseleave", function(){
    workTyper.stop();
    workType.innerText = "";

})

// SKILL
let skillTyper = new autoTyper({
    selector: ".skillType",
    words: ['"select"'],
    loop: false,
    delay: 60000,
    charSpeed: 150,
});

skill.addEventListener("mouseenter", function(){
    skillTyper.start();
})

skill.addEventListener("mouseleave", function(){
    skillTyper.stop();
    skillType.innerText = "";

})


// BG ANIMATION
VANTA.WAVES({
    el: "#main",
    mouseControls: false,
    touchControls: false,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x0,
    shininess: 30.00,
    waveHeight: 20.00,
    waveSpeed: 0.3,
    zoom: 1.00
})


//ANIMATION
const timeline = gsap.timeline();

timeline
    .from(".homeLink", {
    duration:2,
    x:-60,
    opacity : 0,
    stagger:0.6,
    ease : "back.out(4)"
    })

    .from(".dateAndTime", {
    duration : 1.4,
    y : -50,
    ease : "bounce.out"
    })

