let selectedTodoId = null;

function fetchTodos() {
    fetch('/api/todos')
    .then(response => response.json())
    .then(todos => {
        const todoList = document.getElementById('todo-list');
        todoList.innerHTML = '';
        todos.forEach(todo => {
            const todoItem = document.createElement('li');
            todoItem.textContent = todo.id +"> "+ todo.title;
            todoItem.innerHTML += `
		    <input type="text" class="new-comment-text" placeholder="New Comment">
		    <button data-todoid="${todo.id}" onclick="addComment(this)">Add Comment</button>`;
            todoItem.onclick = () => showComments(todo.id);
            showComments(todo.id);
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
			console.log(comment);
            const commentItem = document.createElement('li');
            commentItem.textContent = comment.id +". "+ comment.content;
            commentList.appendChild(commentItem);
        });
    });
}

function addComment(element) {
    let text = element.previousElementSibling.value;
    let todoId = element.dataset.todoid;
    console.log("new comment >>>>> ", text, todoId);
	fetch(`/api/todos/${todoId}/comments`, {
        method: 'POST',  // HTTP 메서드를 POST로 설정
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content:text })
    }).then(() =>{
		showComments(todoId);
	});
}


// Initialize
fetchTodos();