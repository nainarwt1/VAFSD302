let count = 3;

function addImage() {
  count++;
  const gallery = document.getElementById("gallery");

  // Create a new image element
  const newImg = document.createElement("img");
  newImg.src = https://via.placeholder.com/300x200?text=Product+${count};
  newImg.alt = Product ${count};

  // Add it to the gallery
  gallery.appendChild(newImg);
}