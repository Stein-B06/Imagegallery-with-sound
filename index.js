const imageCards = document.querySelectorAll(".image-card");
const sounds = document.querySelectorAll("audio");

imageCards.forEach((card, index) => {
  const image = card.querySelector("img");
  card.addEventListener("click", () => {
    playSound(index);
    shakeImage(image, sounds[index]);
  });

  // Add key event listeners (1-6)
  window.addEventListener("keydown", (e) => {
    if (e.key >= "1" && e.key <= "6") {
      const keyIndex = parseInt(e.key) - 1;
      playSound(keyIndex);
      shakeImage(imageCards[keyIndex].querySelector("img"), sounds[keyIndex]);
    }
  });
});

function playSound(index) {
  if (index >= 0 && index < sounds.length) {
    sounds[index].currentTime = 0;
    sounds[index].play();
  }
}

function shakeImage(image, sound) {
  image.style.animation = "shake 0.5s";
  sound.addEventListener("ended", () => {
    image.style.animation = "none";
  });
}
