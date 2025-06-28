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
  console.log("played");
});
