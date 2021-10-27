let ulList = document.querySelector('.book-list ul');

// Remove Element From The List
ulList.addEventListener('click', function(e) {
    if(e.target.className == 'delete') {
      const li = e.target.parentElement;
      li.remove();
    }
  });

let addForm = document.forms['add-book'];

// Add Element To The List
addForm.addEventListener('submit', function(e) {
  e.preventDefault();
  let value = addForm.querySelector('input[type="text"]').value;
  
  // Create Elements
  let newLi = document.createElement('li');
  let bookName = document.createElement('span');
  let deleteBtn = document.createElement('span');
  let deleteText = document.createTextNode('delete');
  let bookNameText = document.createTextNode(value);
  
  //Add Classes For Styling
  bookName.className = 'book-name';
  deleteBtn.className = 'delete';

  // Append Elements To Document
  bookName.appendChild(bookNameText);
  deleteBtn.appendChild(deleteText);
  newLi.appendChild(bookName);
  newLi.appendChild(deleteBtn);

  // Check If There's Book Without Name
  if(bookName.textContent !== '') {
    ulList.appendChild(newLi);
  }

  // Clear Input Field When Adding
  let addInput = addForm.querySelector('input');
  addInput.value = '';
});

let hideBox = document.querySelector('#hide-books input[type="checkbox"]');

// Hide All Books
hideBox.addEventListener('change', function(e) {
  if(hideBox.checked) {
    ulList.style.display = "none";
  } else {
    ulList.style.display = "block";
  }
});

// Filter Books
const searchBar = document.forms['filter-books'].querySelector('input');
searchBar.addEventListener('keyup', function(e) {
  const term = e.target.value.toLowerCase();
  let books = ulList.getElementsByTagName('li');

  Array.from(books).forEach(function(book) {
    let bookTitle = book.firstElementChild.textContent;

    // Compare Book Title with Search Term
    if(bookTitle.toLowerCase().indexOf(term) != -1) {
      book.style.display = 'flex';
    } else {
      book.style.display = 'none';
    }
  })
})