function onReady() {
     const addToDoForm = document.getElementById('addToDoForm');
     const newToDoText = document.getElementById('newToDoText');
     const toDoList = document.getElementById('toDoList');

     // This is the event listener for the ToDo list submit button
     addToDoForm.addEventListener('submit', () => {
       event.preventDefault();

    // get the text
    let title = newToDoText.value;
    // create a new li
    let newLi = document.createElement('li');
    // create a new input
    let checkbox = document.createElement('input');

    // create a new delete button
    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<span>Delete</span>';

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    // attach the delete button to the li
    newLi.appendChild(deleteBtn);

    //empty the input
    newToDoText.value = '';


  });
}
window.onload = function() {
   onReady();
 };
