const display = document.querySelector('.display');
const startBin = document.querySelector('.start');
const stopBin = document.querySelector('.stop');
const resetBin = document.querySelector('.reset');

let startTime, intervalId;
//Defining start functions that starts Time:

function start(){
    startTime = Date.now();
    intervalId = setInterval(() => {
        const elapsedTime =(Date.now()-startTime)/1000;
        const sec= Math.floor(elapsedTime%60);
        const minutes = Math.floor(elapsedTime/60);
        const min =Math.floor(minutes%60)
        const hours = Math.floor(minutes/60);
        
       //HH:MM:SS 
        const formattedTime = `${pad(hours)}: ${pad(min)}: ${pad(sec)}`;

        display.textContent = formattedTime;

    },10);
}


function stop (){
    clearInterval(intervalId);
}

function reset() {
    clearInterval(intervalId);
    display.textContent = '00:00:00';
}

function pad(number){
    return number < 10? '0' + number : number;
}

startBin.addEventListener('click',start);
stopBin.addEventListener('click',stop);
resetBin.addEventListener('click',reset);
