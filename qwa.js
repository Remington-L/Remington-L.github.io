const dragArea = document.querySelector('.drag-area');
const dragText = document.querySelector('.header');

let file;

// when file is inside drag area

dragArea.addEventListener('dragenter', (ev) => {
    ev.preventDefault();
    dragText.textContent = 'Release to Upload';
    console.log('File is inside the drag area');
    dragArea.classList.add('active');
});

dragArea.addEventListener('dragleave', () => {
    console.log('File left the drag area');
    dragText.textContent = 'Drag & Drop';
    dragArea.classList.remove('active');
});

dragArea.addEventListener('drop', (ev) => {
    ev.preventDefault();
    console.log('The file is dropped in drag area');
    file = ev.dataTransfer.files[0];
    console.log(file);
});


var dropzoneId = "dropzone";

window.addEventListener("dragenter", function(e) {
  if (e.target.id != dropzoneId) {
    e.preventDefault();
    e.dataTransfer.effectAllowed = "none";
    e.dataTransfer.dropEffect = "none";
  }
}, false);

window.addEventListener("dragover", function(e) {
  if (e.target.id != dropzoneId) {
    e.preventDefault();
    e.dataTransfer.effectAllowed = "none";
    e.dataTransfer.dropEffect = "none";
  }
});

window.addEventListener("drop", function(e) {
  if (e.target.id != dropzoneId) {
    e.preventDefault();
    
    
    console.log('The file is dropped in drag area');
  }
});
