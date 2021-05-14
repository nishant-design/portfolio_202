const designTab = document.querySelector(".design").firstElementChild;
const developTab = document.querySelector(".develop").firstElementChild;
const toolsTab = document.querySelector(".tools").firstElementChild;

const designDesc = document.getElementById("design");
const developDesc = document.getElementById("develop");
const toolsDesc = document.getElementById("tools");

designTab.addEventListener("click", function(){
    designTab.classList.add("activeTab");
    designDesc.classList.add("active");

    developTab.classList.remove("activeTab");
    developDesc.classList.remove("active");
    toolsTab.classList.remove("activeTab");
    toolsDesc.classList.remove("active");
})

developTab.addEventListener("click", function(){
    developTab.classList.add("activeTab");
    developDesc.classList.add("active");

    designTab.classList.remove("activeTab");
    designDesc.classList.remove("active");
    toolsTab.classList.remove("activeTab");
    toolsDesc.classList.remove("active");
})

toolsTab.addEventListener("click", function(){
    toolsTab.classList.add("activeTab");
    toolsDesc.classList.add("active");

    developTab.classList.remove("activeTab");
    developDesc.classList.remove("active");
    designTab.classList.remove("activeTab");
    designDesc.classList.remove("active");
});

// animation
const timeline = gsap.timeline();

timeline
    .from(".sectionHeading",{
        y: 500,
        duration:1.2,
        ease : "power2.out"
    },"start")

    .from(".dateAndTime", {
        duration : 1.4,
        y : -50,
        ease : "bounce.out"
    }, "start")

    .from(".design",{
        x:-400,
        y:-500,
        duration:1.5
    }, "-=0.7")

    .from(".develop",{
        y:-500,
        duration:1.5
    }, "-=0.7")

    .from(".tools",{
        x: 400,
        y:-500,
        duration:1.5
    }, "-=0.7")

    .from(".description",{
        y:800,
        duration:1.5,
        // ease:"bounce.out"
    })

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