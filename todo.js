//Javascript Doc

let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
		//1 click on the todo item, strikes a line through
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
		//double clicking on the todo item, deletes it
    })
})