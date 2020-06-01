const toDoForm = document.querySelector('.js-toDoForm');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos';

function showToDo(text) {
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    
    delBtn.innerText = '❌';
    const span = document.createElement('span');
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
}

function handleSubmit(e) {
    e.preventDefault();
    const currentValue = toDoInput.value;
    showToDo(currentValue);
    toDoInput.value = '';
}

function loadToDos() {
    const toDos = localStorage.getItem(TODOS_LS);
}

function init() {
    loadToDos();
    toDoForm.addEventListener('submit', handleSubmit);
}

init();