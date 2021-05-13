// ANIMATION GASP
const timeline = gsap.timeline();

if (screen.width > 700){
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
}

// SCREEN WIDTH < 700px

if (screen.width < 700){
    timeline
    .from(".sectionHeading",{
        x: -500,
        duration:1.5,
        ease : "power2.out"
    })

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

    // .from(".dateAndTime", {
    //     duration : 1.4,
    //     y : -50,
    //     ease : "bounce.out"
    // })
}