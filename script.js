console.log("OK");
$(document).ready(function () {
  $(".gallery-box").slick({
    infinite: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  });
  $(".gallery-box").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true,
    },
    zoom: {
      enabled: true,
    },
  });
});

const startGame = document.querySelector(".button-game");
console.log("startGame", startGame);
const overlayLayer = document.querySelector("#overlay");
console.log("overlay", overlayLayer);

startGame.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Start");
  startGame.innerHTML = null;
  startGame.style.fontSize = "80px";
  startGame.style.fontWeight = "bold";
  startGame.style.color = "black";

  // startGame.style.display = 'none';
  timeOut();
});

function timeOut() {
  let i = 3;
  function timeRun() {
    startGame.innerHTML = i;
    i--;

    if (i >= 0) {
      setTimeout(timeRun, 1000);
    } else {
      overlayLayer.style.display = "none";
      timer();
    }
  }
  timeRun();
}

function timeGame(time) {
  let currentSeconds = document.querySelector("#sec");
  let currentMinutes = document.querySelector("#min");
  let currentHours = document.querySelector("#hours");
  let gameTime = time;
  let gameTimeFormatted = String(gameTime).padStart(2, "0");
  let gameSeconds;
  let gameMinutes;
  let gameHours;
  let gameSecondsFormatted;
  let gameMinutesFormatted;
  let gameHoursFormatted;

  //
  if (gameTime < 60) {
    currentSeconds.innerHTML = gameTimeFormatted;
  } else if (gameTime > 60 && gameTime < 3600) {
    gameMinutes = Math.floor(gameTime / 60);
    console.log(gameMinutes);
    gameSeconds = gameTime % 60;
    console.log(gameSeconds);
    //
    gameMinutesFormatted = String(gameMinutes).padStart(2, "0");
    currentMinutes.innerHTML = gameMinutesFormatted;
    gameSecondsFormatted = String(gameSeconds).padStart(2, "0");
    currentSeconds.innerHTML = gameSecondsFormatted;
  } else if (gameTime > 3600) {
    gameMinutes = Math.floor(gameTime / 60);
    console.log(gameMinutes);
    if (gameMinutes > 60) {
      gameMinutes = gameMinutes - 60;
    }
    console.log(gameMinutes);
    gameSeconds = gameTime % 60;
    console.log(gameSeconds);
    gameHours = Math.floor(gameTime / 3600);
    console.log(gameHours);
    //
    gameMinutesFormatted = String(gameMinutes).padStart(2, "0");
    currentMinutes.innerHTML = gameMinutesFormatted;
    gameSecondsFormatted = String(gameSeconds).padStart(2, "0");
    currentSeconds.innerHTML = gameSecondsFormatted;
    gameHoursFormatted = String(gameHours).padStart(2, "0");
    currentHours.innerHTML = gameHoursFormatted;
  }
}

function timer() {
  let startTime = 1;
  timeGame(startTime);
  startTime++;
  setInterval(function () {
    timeGame(startTime);
    startTime++;
  }, 1000);
}
