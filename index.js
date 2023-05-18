
var hourHand=document.getElementById("hour");
var minHand=document.getElementById("minute");
var secHand=document.getElementById("second");
console.log(hourHand)
console.log(minHand)
console.log(secHand)

setInterval(() => {

    var d = new Date();
    htime = d.getHours;
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;


    hourHand.style.transform = `rotate(${hrotation}deg)`;
    minHand.style.transform = `rotate(${mrotation}deg)`;
    secHand.style.transform = `rotate(${srotation}deg)`;
}, 1000);