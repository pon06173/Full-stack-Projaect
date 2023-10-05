let selectedTodoId = null;

function fetchTodos() {
    fetch('/api/todos')
    .then(response => response.json())
    .then(todos => {
        const todoList = document.getElementById('todo-list');
        todoList.innerHTML = '';
        todos.forEach(todo => {
            const todoItem = document.createElement('li');
            todoItem.textContent = todo.title;
            todoItem.onclick = () => showComments(todo.id);
            todoList.appendChild(todoItem);
        });
    });
}

function addTodo() {
    const title = document.getElementById('new-todo-title').value;
    fetch('/api/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title })
    }).then(() => fetchTodos());
}

function showComments(todoId) {
    selectedTodoId = todoId;
    fetch(`/api/todos/${todoId}/comments`)
    .then(response => response.json())
    .then(comments => {
        const commentList = document.getElementById('comment-list');
        commentList.innerHTML = '';
        comments.forEach(comment => {
            const commentItem = document.createElement('li');
            commentItem.textContent = comment.text;
            commentList.appendChild(commentItem);
        });
    });
}

function addComment() {
    const text = document.getElementById('new-comment-text').value;
    fetch(`/api/todos/${selectedTodoId}/comments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text })
    }).then(() => showComments(selectedTodoId));
}

// Initialize
fetchTodos();