const cl = console.log;

const setZero = (num) => {
    return(num < 10 ) ? "0" + num : num;
}

const countDownHandler = () =>{
const countDown = document.getElementById('countDown');
let cd = Date.now();

let td = new Date("march 15, 2026 23:59:59").getTime();

cl(cd);
cl(td);
let diff = td - cd ;

let days = Math.floor ( diff  /  86400000 );
cl(days);


let hr = (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
cl(hr)
let hrInt = Math.floor(hr);
cl(hrInt)

let min = (diff % ( 1000  *  60  *  60  ))  /  (1000  * 60)
cl(min)  
let minInt = Math.floor(min);
cl (minInt);

let sec = (diff % (1000 * 60)) / 1000
cl(sec)
let secInt = Math.floor(sec);
cl (secInt);

countDown.innerHTML = `${setZero(days)}  Days  ${setZero(hrInt)}  Hours  ${setZero(minInt)}  min  ${setZero(secInt)}  sec`;

if (diff < 0){
    clearInterval();
	countDown.innerHTML="its matched";
	
  }
}


setInterval(countDownHandler,1000);