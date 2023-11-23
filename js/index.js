var bubble_val = 0;
var hit_val = 0;
var score_val = 0;

const MakeBubble = () => {
    var clutter=""

    for(var i=0; i<110; i++){
        bubble_val = Math.floor(Math.random()*10)
        clutter += `<div class="bubble"><h3>${bubble_val}</h3></div>`
    }

    document.querySelector('#pbtm').innerHTML = clutter
}

const getNewHit = () => {
    hit_val = Math.floor(Math.random()*10)
    document.querySelector('#hit').innerHTML = hit_val
}

const RunTimer = () => {
    var timer_val = 60;
    
    var time_interval = setInterval(() => {
        if(timer_val > 0){
            timer_val--;
            document.querySelector('#timer').textContent = timer_val;
        }
        else{
            clearInterval(time_interval)
            document.querySelector('#pbtm').innerHTML = `<h2>Game over<br>Your Score : ${score_val}</h2>`
        }
    }, 1000)
    
}

const AddScore = () => {
    score_val += 10;
    document.querySelector('#score').textContent = score_val
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('pbtm').addEventListener('click', (details) => {
        var clicked_num = Number(details.target.textContent) 
        
        if(clicked_num === hit_val){
            AddScore()
            MakeBubble()
            getNewHit()
        }
    })
})


MakeBubble()
getNewHit()
RunTimer()