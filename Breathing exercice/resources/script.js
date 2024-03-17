const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const breathingBall = document.querySelector(".ball");
const firstWord = document.querySelector(".word1");
const secondWord = document.querySelector(".word2");
const animation1 = document.querySelector(".animation");
const animation2 = document.querySelector(".wordsAnimation");

play.addEventListener("click", function () {
  breathingBall.classList.add("played");
  firstWord.classList.add("played");
  secondWord.classList.add("played");
  play.classList.add("no-display");
  pause.classList.remove("no-display");
});

pause.addEventListener("click", function () {
  breathingBall.classList.remove("played");
  firstWord.classList.remove("played");
  secondWord.classList.remove("played");
  play.classList.remove("no-display");
  pause.classList.add("no-display");
});
