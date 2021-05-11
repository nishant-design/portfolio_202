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


