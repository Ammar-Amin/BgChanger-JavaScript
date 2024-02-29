const body = document.querySelector('body');
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');

let randomColor = () => {
    let hex = '0123456789ABCDEF';
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * hex.length)];
    }
    // console.log(color);
    return color;
}


let intervalId;
startBtn.addEventListener('click', function () {
    // // this will work fine
    // intervalId = setInterval(() => {
    //     body.style.backgroundColor = randomColor();
    // }, 500);

    // but we can modify it, cuz after clearInterval we are seting the intervalId to null

    if (intervalId == null) {
        intervalId = setInterval(() => {
            body.style.backgroundColor = randomColor();
        }, 500);
    }
})

stopBtn.addEventListener('click', function () {
    clearInterval(intervalId);
    // for more advanced code 
    intervalId = null;
})

