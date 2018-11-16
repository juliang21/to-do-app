//This whole function executes once the page is loaded
function onReady() {
  let id = 0;
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');

//This creates the toDo list
function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; };
    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: ++id
    });
    newToDoText.value = '';
    renderTheUI();
}

//This is the function that deletes the corresponding list item
function deleteToDo(id) {
  return toDos.filter(toDo => toDo.id !== id);
}

//This is the function that renders the UI
function renderTheUI() {
    const toDoList = document.getElementById('toDoList');
    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
            const newLi = document.createElement('li');
            const checkbox = document.createElement('input');
            const deleteBtn = document.createElement('button');
            deleteBtn.appendChild(document.createTextNode('delete'));
            checkbox.type = "checkbox";
            newLi.textContent = toDo.title;
            toDoList.appendChild(newLi);
            newLi.appendChild(checkbox);
            newLi.appendChild(deleteBtn);
            //This is the event listener. When someone clicks on the delete button, it triggers the function to delete and re-renders the UI
            deleteBtn.addEventListener('click', () => {
              toDos = deleteToDo(toDo.id); renderTheUI();
            });
    });
  }

addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

renderTheUI();

}
window.onload = function() {
   onReady();
 };
