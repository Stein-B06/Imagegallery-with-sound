//images and description added
const imageData = [
  { src: "cow.jpg", description: "Sound of a cow", sound: "cow.mp3" },
  { src: "pig.jpg", description: "Sound of a pig", sound: "pig.mp3" },
  { src: "sheep.jpg", description: "Sound of a sheep", sound: "sheep.mp3" },
  {
    src: "rooster.jpg",
    description: "Sound of a rooster",
    sound: "rooster.mp3",
  },
  { src: "turkey.jpg", description: "Sound of a turkey", sound: "turkey.mp3" },
  { src: "horse.jpg", description: "Sound of a horse", sound: "horse.mp3" },
];

// Function to create and add image cards to the page
function createAndAddImageCards() {
  const imageGrid = document.getElementById("image-grid");

  imageData.forEach((data) => {
    const imageCard = document.createElement("div");
    imageCard.classList.add("image-card");

    const image = document.createElement("img");
    image.src = data.src;
    image.alt = data.description;

    const description = document.createElement("p");
    description.textContent = data.description;

    // Add click event so image play sound and shake
    imageCard.addEventListener("click", () => {
      playSound(data.sound);
      shakeImage(image);
    });

    imageCard.appendChild(image);
    imageCard.appendChild(description);

    imageGrid.appendChild(imageCard);
  });
}

//function to play sound
function playSound(soundSrc) {
  const audio = new Audio(soundSrc);
  audio.play();
}

//code to make images sdhake
function shakeImage(image) {
  image.style.animation = "shake 1.0s";
}
