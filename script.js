var score = 20;
var highscore = 0;
var highscoreAtual = 0;
let guessNumber = [];

aleatorio = () => {
  return Math.floor(Math.random() * 20) + 1;
};

ale = aleatorio();

function inicia() {
  score--;
  if (number !== "") {
    if (score == 20) {
      guessNumber.shift(number);
    } else {
      var number = document.querySelector("#check").value;
      if (!number == "") {
        if (score >= 0) {
          guessNumber.push(number);
          console.log(guessNumber);
          document.querySelector("#guessednumbers").innerHTML = guessNumber;
          console.log(ale);
          if (ale == number) {
            score++;
            document.querySelector(".number").innerHTML = number;
            document.querySelector("body").style.backgroundColor = "green";
            document.querySelector(".highscore").innerHTML = highscore;
            var scoreAtual = (document.querySelector("#score").innerHTML =
              score);
            if (scoreAtual >= highscore) {
              highscore = scoreAtual;
              document.querySelector(".highscore").innerHTML = scoreAtual;
            }
            document.querySelector("#message").innerHTML = "Acertou";
            guessNumber = [];
            document.querySelector("#guessednumbers").innerHTML = "";5
          }
          if (ale != number) {
            document.querySelector("#score").innerHTML = score;

            if (number <= ale) {
              document.querySelector("#message").innerHTML = "um pouco a mais";
            } else {
              document.querySelector("#message").innerHTML = "um pouco a menos";
            }
          }
        }
      } else {
        document.querySelector("#message").innerHTML =
          "Informe um numero válido";
      }
    }
  }
}

document.querySelector(".btn.check").addEventListener("click", function () {
  inicia();
});

document.querySelector(".btn.again").addEventListener("click", () => {
  document.querySelector("body").style.backgroundColor = "#222";
  document.getElementById("check").value = "";
  document.querySelector(".number").innerHTML = "?";
  score = 21;
  ale = aleatorio();
  guessNumber = [];

  inicia();
});
// colocar numeros chutados
//best player os 3 ultimo
