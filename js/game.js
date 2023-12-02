var HighScore = 0;
var main_sound, play_game_sound, incorrect_hit_sound;

const playMainSound = () => {
    main_sound.play()
}

const StartNewGame = () => {
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

    var timer_val = 60;

    const showTimer = () => {
        document.querySelector('#timer').textContent = timer_val;
    }

    const RunTimer = () => {
        
        var time_interval = setInterval(() => {
            if(timer_val > 0){
                timer_val--;
                showTimer()
            }
            else{
                clearInterval(time_interval)
                document.querySelector('#pbtm').innerHTML = `
                                                                <div id='game_over'>
                                                                    <h2>Game over<br>Your Score : ${score_val}</h2>
                                                                    <br> 
                                                                    <h3 id='restart' class='restart_btn'>Play Again</h3>
                                                                </div>

                                                            `
                gameOver();
            }
        }, 1000)
        
    }

    const showScore = () => {
        document.querySelector('#score').textContent = score_val
    }

    const AddScore = () => {
        score_val += 10;
        showScore()
    }

    
    document.getElementById('pbtm').addEventListener('click', (event) => {
        console.log(event.target)
        var clicked_num = Number(event.target.textContent) 
        
        if(clicked_num == hit_val){
            const correct_hit_sound = document.getElementById('correct_sound')
            correct_hit_sound.play()

            AddScore()
            MakeBubble()
            getNewHit()
        }
        else{
            incorrect_hit_sound.play()
            score_val -= 5;
            showScore()
            MakeBubble()
            getNewHit()
        }
    })

    document.getElementById('pbtm').addEventListener('click', function(event) {
        if (event.target && event.target.id === 'restart') {
            timer_val=60;
            score_val=0;
            play_game_sound.play()
            MakeBubble()
            getNewHit()
            showTimer()
            RunTimer()
            showScore()
            showHighScore()
            playMainSound()
        }
    });

    const showHighScore = () => {
        document.querySelector('#high_score').textContent = HighScore
    }

    MakeBubble()
    getNewHit()
    showTimer()
    RunTimer()
    showHighScore()
    playMainSound()
}


document.addEventListener('DOMContentLoaded', () => {
    main_sound = document.getElementById('main_sound')
    play_game_sound = document.getElementById('start_game_sound');
    incorrect_hit_sound = document.getElementById('incorrect_sound');
    StartNewGame()
})


const gameOver = () => {
    HighScore = Math.max(HighScore, score_val);
    // submitScore(score_val);
}
