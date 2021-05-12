// COMMON FUNTIONS THROUGHOUT

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

//copy email to clipboard
let copyText = document.querySelector(".email");
let tooltip = document.querySelector(".tool_tip_text");

copyText.addEventListener("click", ()=>{
    const pel = document.createElement('textarea');
    pel.value = copyText.innerText;
    document.body.appendChild(pel);
    pel.select();
    document.execCommand('copy');
    document.body.removeChild(pel);
    tooltip.innerText = "email copied";
    
    setTimeout(function(){
        tooltip.innerText = "click to copy"
    }, 2000) 
    
});

// social icon redirect
const instagram = document.querySelector(".instagram");
const github = document.querySelector(".github");
const linkedin = document.querySelector(".linkedin");

instagram.addEventListener("click", function(){
    window.open("https://www.instagram.com/_nishantchugh/");
});

github.addEventListener("click", function(){
    window.open("https://github.com/nishant-design");
});

linkedin.addEventListener("click", function(){
    window.open("https://www.linkedin.com/in/nishant-chugh-1b180220a/");
});