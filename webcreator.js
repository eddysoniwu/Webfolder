
const fonthtml = document.createElement('i')
fonthtml.className = 'far fa-grin-alt fa-3x text-orange'
document.querySelector('.fnt').appendChild(fonthtml)

var box = document.querySelector('.box');

let sec = 0;
const starttime = setInterval(functionName, 100)
function functionName() {
    if(sec >= 95) {
        clearInterval(starttime)
    }else {
        sec++;
        document.querySelector('.h1time').innerHTML = sec
    }
}

const backhtml = document.createElement('i')
backhtml.className = 'fas fa-user-tie fa-3x text-orange'
document.querySelector('.run').appendChild(backhtml)

var pass = document.querySelector('.pass');

let count = 0;
const counttime = setInterval(funName, 100)
function funName() {
    if(count >= 40) {
        clearInterval(counttime)
    }else {
        count++;
        document.querySelector('.test').innerHTML = count
    }
}

const sidehtml = document.createElement('i')
sidehtml.className = 'fas fa-atlas fa-3x text-orange'
document.querySelector('.fun').appendChild(sidehtml)

var fail = document.querySelector('.fail');

let fend = 0;
const fendtime = setInterval(fullName, 100)
function fullName() {
    if(fend >= 95) {
        clearInterval(fendtime)
    }else {
        fend++;
        document.querySelector('.exam').innerHTML = fend
    }
}





