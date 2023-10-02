const images = document.querySelectorAll(".image-container img");
const sounds = document.querySelectorAll("audio");

images.forEach((image, index) => {
  image.addEventListener("click", () => {
    playSound(index);
  });

  // Add key event listeners (1-5)
  window.addEventListener("keydown", (e) => {
    if (e.key >= "1" && e.key <= "5") {
      playSound(parseInt(e.key) - 1);
    }
  });
});

function playSound(index) {
  if (index >= 0 && index < sounds.length) {
    sounds[index].currentTime = 0; // Reset audio to start
    sounds[index].play();
  }
}
