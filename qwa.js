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
    
    file = ev.dataTransfer.files[0];
    let fileType = file.type
    console.log(fileType);
     
});
