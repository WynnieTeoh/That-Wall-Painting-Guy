// Function to open the modal
function openModal(img) {
  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the image and insert it inside the modal
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");

  modal.style.display = "block";
  modalImg.src = img.src;
  captionText.innerHTML = img.alt;

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  span.onclick = closeModal; // Here, closeModal is a reference to the function
}

function closeModal(event) {
  if (event) event.stopPropagation();
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

span.onclick = function (event) {
  closeModal(event);
};
