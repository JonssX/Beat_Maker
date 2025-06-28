// Audio context
const audioContext = new AudioContext();

// Adding audio lements to the Context
const kickOneSound = document.getElementById("kick_one_sound");
const kickOne = audioContext.createMediaElementSource(kickOneSound);

// Destination
kickOne.connect(audioContext.destination);

// Test playing
const kickInstrument = document.getElementById("kick_instrument");

kickInstrument.addEventListener("click", () => {
  kickOneSound.play();
});

// Jak nałożyć granie na każdy z elementów?
// const beatBox = document.getElementsByClassName("beat_box");

// const iterate = () => {
//   for (let i; i < beatBox.length; i++) {
//     beatBox[i].addEventListener("click", () => {
//       kickOneSound.play();
//     });
//   }
// };

// iterate();
