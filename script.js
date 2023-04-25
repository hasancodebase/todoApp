const form = document.querySelector('form');
const input = document.querySelector('#todoInput');
const list = document.querySelector('#todoList');

let todos = [];

function renderTodos() {
  list.innerHTML = '';
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${todo}</span>
      <button type="button" onclick="deleteTodo(${index})">Delete</button>
    `;
    list.appendChild(li);
  });
}

function addTodo() {
  const todo = input.value.trim();
  if (todo) {
    todos.push(todo);
    input.value = '';
    renderTodos();
  }
}

function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  addTodo();
});