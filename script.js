const playbackbtn = document.querySelector(".playback__bar__center");
const pausebtn = document.querySelector(".pause__bar__center");


function playbackBtnEvent() {
    playbackbtn.classList.add("hidden");
    pausebtn.classList.remove("hidden");
}

function pauseBtnEvent() {
    pausebtn.classList.add("hidden");
    playbackbtn.classList.remove("hidden");
}

playbackbtn.addEventListener("click", playbackBtnEvent);

pausebtn.addEventListener("click", pauseBtnEvent);