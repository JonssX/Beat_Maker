// Audio context
const audioContext = new AudioContext();

// Adding audio lements to the Context
const kickOneSound = document.getElementById("kick_one_sound");
const kickOne = audioContext.createMediaElementSource(kickOneSound);

// Destination
kickOne.connect(audioContext.destination);

// Test playing
const kickInstrument = document.getElementById("instrument_kick");

kickInstrument.addEventListener("click", () => {
  kickOneSound.play();
});

const soundBox = document.querySelectorAll(".sound_box");
console.log(soundBox);

// This is how to add something to all of the elements!!!
soundBox.forEach((box) => {
  box.addEventListener("click", () => {
    kickOneSound.play();
    box.classList.toggle("active");
  });
});
