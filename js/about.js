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



// ANIMATION GASP
const timeline = gsap.timeline();

timeline
    .from(".aboutHeading",{

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

        duration:1.5,
        x:-1100,
    })

    .fromTo(".before",{
        opacity:1

    },{
        duration:0.2,
        opacity:0

    }, "-=1.3")

    .to(".aboutInfo__heading",{
        duration:0.2,
        opacity:1
    }, "label")

    .fromTo(".whiteBg",{
        x :1500,
        backgroundColor:"#ffffff"
    },{
        duration:1,
        x : 0,
        backgroundColor:"#ffffff"
    }, "label")