let d;
let time;
setInterval(function () {
  d = new Date();
  time = d.toLocaleTimeString();
  console.log(time);
}, 1000);
