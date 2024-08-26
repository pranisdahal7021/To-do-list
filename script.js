
function addTodo() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    if (title === '') {
        alert('Title cannot be empty!');
        return;
    }

    const todoList = document.getElementById('todo-list');
    const todoItem = document.createElement('li');
    todoItem.className = 'todo-item';

    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const todoContent = document.createElement('div');
    const todoTitle = document.createElement('p');
    todoTitle.className = 'todo-title';
    todoTitle.innerText = title;

    const todoDescription = document.createElement('p');
    todoDescription.className = 'todo-description';
    todoDescription.innerText = description;

    todoContent.appendChild(todoTitle);
    if (description) {
        todoContent.appendChild(todoDescription);
    }

    label.appendChild(checkbox);
    label.appendChild(todoContent);
    todoItem.appendChild(label);

    // Add event listener for checkbox
    checkbox.addEventListener('click', function () {
        todoItem.classList.toggle('checked');
    });

    todoList.appendChild(todoItem);

    // Clear input fields after adding the task
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
}
