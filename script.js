var timer=60;
var score=0;
var hitrn=0;



function incscore(){
    score+=10;
    document.querySelector("#scorevalue").textContent=score;
}


function makebubble(){
    var clutter=" ";
for(var i=0;i<168;i++)
{
   var r= Math.floor(Math.random()*10);
    clutter+= `<div class="bubble">${r}</div>`;
}
document.querySelector("#pbot").innerHTML=clutter;
}


function runhit(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hitvalue").textContent=hitrn;

}
document.querySelector("#pbot")
.addEventListener("click",function(details){
    var num= Number(details.target.textContent);
    if(num === hitrn){
        incscore();
        makebubble();
        runhit();
    }
})

function runtimer(){
    var timerint=setInterval(function(){
    
       if(timer>0)
       {
        timer--;
        document.querySelector("#timervalue").textContent=timer;
       }
       else{
        clearInterval(timerint);
        document.querySelector("#pbot").innerHTML=`<h1>GAME OVER</h1>`
       }
    },1000);
}

runtimer();
runhit();
makebubble();
