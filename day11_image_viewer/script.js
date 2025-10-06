// Image list
let images = [
  "images/img1.jpg",
  "images/img2.jpg",
  "images/img3.jpg",
  "images/img4.jpg"
];

let index = 0; // Start with first image
let albumImage = document.getElementById("albumImage");

function showImage() {
  albumImage.src = images[index];
}

// Next button
function nextImage() {
  index++;
  if (index >= images.length) index = 0;
  showImage();
}

// Previous button
function prevImage() {
  index--;
  if (index < 0) index = images.length - 1;
  showImage();
}
