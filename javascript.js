var playing = false;
var score;
var timeRemaining;
var correctAnswer;
var counter;
document.getElementById("startreset").onclick = function () {
    if(playing == true) {
        location.reload();
    }
    else {
        playing = true;
        score = 0;
        hide("gameover");
        document.getElementById("scorevalue").innerHTML = score;
        show("timeremaining");
        timeRemaining = 60;
        document.getElementById("timeremainingvalue").innerHTML = timeRemaining;
        startCountdown();
        
        document.getElementById("startreset").innerHTML = "Reset Game";
        
        generateQA();
    }
}
        
for(i=1;i<5;i++) {
    document.getElementById("box" + i).onclick  = function() {
    
    if(playing == true) {
        var answer = this.innerHTML;
        
        if(answer == correctAnswer) {
            
            score++;
            
            document.getElementById("scorevalue").innerHTML = score;
            show("correct");
            
            setTimeout(function () {
                hide("correct");
            }, 1000);
            
            generateQA();
        }
        else {
            
            show("wrong");
            
            show("gameover");
            document.getElementById("gameover").innerHTML = "<p>Game Over!</p> <p>Your Score is "+score+".</p>";
            document.getElementById("startreset").innerHTML = "Start Game";
            hide("timeremaining");

            setTimeout(function () {
                hide("wrong");
            }, 1000);
            
            playing = false;
        }
    }
}
}
   

function startCountdown() {
        counter = setInterval(function () {
        timeRemaining -= 1;
        document.getElementById("timeremainingvalue").innerHTML = timeRemaining;
        
        if(timeRemaining == 0) {
            stopCountDown();
            show("gameover");
            document.getElementById("gameover").innerHTML = "<p>Game Over!</p> <p>Your Score is "+score+".</p>";
            hide("timeremaining"); 
            hide("correct");
            hide("wrong");
            playing = false;
            document.getElementById("startreset").innerHTML = "Start Game";
        }
    }, 1000);
}

function stopCountDown() {
    clearInterval(counter);
}

function hide(Id) {
    document.getElementById(Id).style.display = "none";
}

function show(Id) {
    document.getElementById(Id).style.display = "block";
}

function generateQA() {
    var x = 1 +(Math.round(Math.random()*9));
    var y = 1 + (Math.round(Math.random()*9));
    correctAnswer = x * y;
    var wrongAnswer;
    
    document.getElementById("question").innerHTML = x + "x" + y;
    var correctPosition = 1 + (Math.round(Math.random() * 3));
    
    document.getElementById("box" + correctPosition).innerHTML = correctAnswer;
    
    for(i=1;i<5;i++){
        if(i != correctPosition) {
            do{
                wrongAnswer = (1 + (Math.round(Math.random()*9))) * (1 + (Math.round(Math.random()*9)));
            }while(wrongAnswer == correctAnswer)
            document.getElementById("box"+i).innerHTML = wrongAnswer;
        }
    }
}
