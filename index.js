let files = [];
const fileWrapper = document.getElementById("uploadedfiles");
const text = document.getElementById("area-text");
const fileInput = document.getElementById("fileInput");
function uploadFiles(event) {
  if (event) {
    event.preventDefault();
    files.push(...event.dataTransfer.files);
  } else {
    files.push(...fileInput.files);
  }
  displayThumbnail();
  if (files.length > 0) {
    text.style.display = "none";
  } else {
    text.style.display = "block";
  }
}

function displayThumbnail() {
  fileWrapper.innerHTML = "";
  for (let i = 0; i < files.length; i++) {
    const reader = new FileReader();
    reader.onload = function (e) {
      fileWrapper.innerHTML += `
      <div class="thumbnail-bg"><img src="${e.target.result}" class="thumbnail"/><span class="remove-text" onclick="removeFile(${i})">Remove</span></div>`;
    };
    reader.readAsDataURL(files[i]);
  }
}

function openFiles() {
  fileInput.click();
}

function removeFile(i) {
  files.splice(i, 1);
  displayThumbnail();
  if (files.length === 0) {
    text.style.display = "block";
  }
}
