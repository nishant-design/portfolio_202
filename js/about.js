// ANIMATION GASP
const timeline = gsap.timeline();

if (screen.width > 800){
    timeline
    .from(".sectionHeading",{
        y: 500,
        duration:1.5,
        ease : "power2.out"
    }, "start")

    .from(".dateAndTime", {
        duration : 1.4,
        y : -50,
        ease : "bounce.out"
    }, "start")

    .fromTo(".yellowBg",{
        x :1500,
    }, {
        duration:2,
        x:-1800,
    })

    .fromTo(".before",{
        opacity:1

    },{
        duration:0.1,
        opacity:0

    }, "-=1.5")

    .to(".aboutInfo__heading",{
        duration:0.2,
        opacity:1
    },"-=0.7", "label")

    .fromTo(".whiteBg",{
        x :1500,
        backgroundColor:"#ddd"
    },{
        duration:1,
        x : 0,
        backgroundColor:"#ddd"
    },"-=0.7", "label")

    .from(".btnWrapper", {
        opacity:0
    })

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

    .from(".contact",{
        opacity:0,
        y: 100,
        ease: "powerOut"
    })
}

// SCREEN WIDTH < 800px

if (screen.width <= 800){
    timeline
    .from(".sectionHeading",{
        y: -200,
        duration:1.5,
        ease : "power2.out"
    }, "hello")

    .fromTo(".yellowBg",{
        x :1000,
    }, {
        duration:2,
        x:-1000,
    })

    .fromTo(".before",{
        opacity:1

    },{
        duration:0.1,
        opacity:0

    }, "-=1.5")

    .to(".aboutInfo__heading",{
        duration:0.2,
        opacity:1
    },"-=1.1", "label")

    .fromTo(".whiteBg",{
        x :1500,
        backgroundColor:"#ddd"
    },{
        duration:1,
        x : 0,
        backgroundColor:"#ddd"
    },"-=1.1", "label")

    .from(".aboutInfo",{
        opacity: 0,
        duration:1
    }, "-=0")

    .from(".btnWrapper", {
        opacity:0
    })


    .from(".dateAndTime", {
        duration : 1.4,
        y : -50,
        delay:0.5,
        ease : "bounce.out"
    }, "hello")

    .from(".template", {
        opacity:0
    })
}