//Added the data for the images and the sounds.
const imageData = [
  { src: "cow.jpg", description: "Cow sound", sound: "cow.mp3" },
  { src: "pig.jpg", description: "Pig sound", sound: "pig.mp3" },
  { src: "rooster.jpg", description: "Rooster sound", sound: "rooster.mp3" },
  { src: "sheep.jpg", description: "Sheep sound", sound: "sheep.mp3" },
  { src: "turkey.jpg", description: "Turkey sound", sound: "turkey.mp3" },
  { src: "horse.jpg", description: "Horse sound", sound: "horse.mp3" },
];
// Function to create and add image cards to the page
function createAndAddImageCard() {
  const imageGrid = document.getElementById(ìmage - grid);

  imageData.forEach((data)) => {
    const imageCard = document.createElement(`div`)
 imageCard.classList.add(`image-card`)

 const image = document.createElement(`img`)
 image.src =data.src;
 image.alt = data.description;

 const description = document.createElement(`p`);
description.textContent = data.description;

 //added click event so that image plays sound and shakes
imageCard.addEventListener(`click`, () => {
  playSound(data.sound)
  shakeImage(image);
}
)
imageCard.appendChild(image);
imageCard.appendChild(description);
imageGrid.appendChild(imageCard);

  }
}
