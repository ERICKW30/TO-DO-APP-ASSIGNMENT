const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
const clearBtn = document.getElementById('clear-btn');
const countSpan = document.getElementById('count');

let todos = [];

function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        const text = document.createTextNode(todo);
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            deleteTodo(index);
        });
        li.appendChild(text);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });
    countSpan.textContent = `${todos.length} tasks remaining`;
}

function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText) {
        todos.push(todoText);
        todoInput.value = '';
        renderTodos();
    }
}

function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}

function clearAllTodos() {
    todos = [];
    renderTodos();
}

addBtn.addEventListener('click', addTodo);
clearBtn.addEventListener('click', clearAllTodos);
todoInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTodo();
    }
});

renderTodos();