var score = 20
var highscore = 0
var highscoreAtual = 0


aleatorio =()=>{
    return Math.floor(Math.random() * 20) + 1
}

ale = aleatorio()

function inicia(){
    score--;
    if(score >=0){
        var number = document.querySelector("#check").value
        console.log(ale)
        if(ale == number){
            score++;
            document.querySelector(".number").innerHTML = number
            document.querySelector("body").style.backgroundColor = "green"
            document.querySelector(".highscore").innerHTML = highscore
            var scoreAtual = document.querySelector("#score").innerHTML = score
            if(scoreAtual >= highscore){
                highscore=scoreAtual
                document.querySelector(".highscore").innerHTML = scoreAtual
            }
            document.querySelector("#message").innerHTML = "Acertou"
        }
        if(ale != number){
            document.querySelector("#score").innerHTML = score
            
            if( number <= ale) {

                document.querySelector("#message").innerHTML = "um pouco a mais"
            }else{
                document.querySelector("#message").innerHTML = "um pouco a menos"
            }
            
        }
    }
}



document.querySelector(".btn.check").addEventListener("click", function(){
    inicia()
})

document.querySelector(".btn.again").addEventListener("click", ()=>{
    document.querySelector("body").style.backgroundColor = "#222"
    document.getElementById("check").value = ""
    document.querySelector(".number").innerHTML = "?"
    score = 21
    ale = aleatorio()
    inicia()
    
})

