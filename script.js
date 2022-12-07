"use strict";

let myNum = Math.trunc(Math.random() * 20 + 1);
// let message = document.querySelector(".message").textContent;
let score = 20;
// let highScore = 0;

// document.querySelector(".number").textContent = myNum;

document.querySelector(".check").addEventListener("click", function () {
  let userNum = Number(document.querySelector(".guess").value);
  let highScore = Number(document.querySelector(".highscore").textContent);
  if (myNum !== userNum) {
    score--;
    document.querySelector(".score").textContent = score;
    if (myNum > userNum)
      document.querySelector(".message").textContent = "too low";
    else document.querySelector(".message").textContent = "too high";
  } else {
    document.querySelector(".message").textContent = "You Win!";
    document.querySelector("body").style.backgroundColor = "green";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".message").textContent = "Let's start again";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".score").textContent = 20;
  document.querySelector(".guess").value = "";
});
