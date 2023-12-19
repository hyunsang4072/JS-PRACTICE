let d;

d = new Date();

console.log(d.getMonth() + 1);

let dat;

dat = Intl.DateTimeFormat('en-US').format(d);

console.log(dat);