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

    // Add click event so image play sound and shake when clicked on
    image.addEventListener("click", () => {
      playSound(data.sound);
      shakeImage(image);
    });

    // Prevent dragging the images behavior
    image.addEventListener("dragstart", (event) => {
      event.preventDefault();
    });

    //code for appending the image and description elem. to image card.
    imageCard.appendChild(image);
    imageCard.appendChild(description);

    //append the image card to image grid
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
  // Add the 'shake' class to trigger the animation
  image.classList.add("shake");
  image.style.animation = "shake 0.5s";
  // After a short delay, remove the 'shake' class to reset the animation
  setTimeout(() => {
    image.style.animation = "none";
  }, 500);

  // Ensure the animation is removed even if the user clicks rapidly
  image.addEventListener(
    "animationend",
    () => {
      image.classList.remove("shake");
    },
    { once: true }
  );
}

//code for calling the function to create and add images when the page loads
window.addEventListener("load", createAndAddImageCards);
