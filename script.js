function bubbles(){
    var clutter = "";
    for(let i = 1;i <= 176;i++){
        var res = Math.floor(Math.random()*10);
        clutter += `<div class="ball">${res}</div>`
    }
    document.querySelector(".bottompanel").innerHTML=clutter;
}

bubbles();

var timer=60;

function timer1(){
        var timerdecrement=setInterval(function(){
    if(timer>0){
        timer--;
        document.querySelector("#timer").textContent=timer;
        }

        else{
            clearInterval(timerdecrement);
            document.querySelector(".bottompanel").innerHTML=`<h1>Game Over</h1><br><h2>Your Score is ${score}</h2>`

      }
    },1000)
}
timer1();

var hit=0;

function hitting(){
    hit =Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hit;
}
hitting();

var score=0;
function scoring(){
    score+=10;
    document.querySelector('#scoreval').textContent=score;
}

//event bubbling it means if on any event we are not able to find event listener in our current element so we will search event listner in it's parent element

document.querySelector(".bottompanel").addEventListener("click",function(details){
    var clicknumber=Number(details.target.textContent);
    if(clicknumber===hit){
        scoring();
        bubbles();
        hitting();
    }
})