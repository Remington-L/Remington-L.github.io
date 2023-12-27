const dragArea = document.querySelector('.drag-area');
const dragText = document.querySelector('.header');

// when file is inside drag area

dragArea.addEventListener('dragenter', (ev) => {
    ev.preventDefault();
    dragText.textContent = 'Release to Upload';
    console.log('File is inside the drag area');
});

dragArea.addEventListener('dragleave', () => {
    console.log('File left the drag area');
    dragText.textContent = 'Drag & Drop';
});

dragArea.addEventListener('drop', (ev) => {
    ev.preventDefault();
    console.log('The file is dropped in drag area');
});

function dragOverHandler(ev) {
    console.log("File(s) in drop zone");
  
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
  }

  function dropHandler(ev) {
    console.log("File(s) dropped");
  
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
  
    if (ev.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      [...ev.dataTransfer.items].forEach((item, i) => {
        // If dropped items aren't files, reject them
        if (item.kind === "file") {
          const file = item.getAsFile();
          console.log(`… file[${i}].name = ${file.name}`);
        }
      });
    } else {
      // Use DataTransfer interface to access the file(s)
      [...ev.dataTransfer.files].forEach((file, i) => {
        console.log(`… file[${i}].name = ${file.name}`);
      });
    }
  }