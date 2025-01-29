let todos = [];

if(getDataFromLocalStorage().length > 0) {
    todos = getDataFromLocalStorage();
}

function getDataFromLocalStorage() {
    let data = [];
    try {
        data = JSON.parse(localStorage.getItem("todos")) || [];
    } catch (error) {
        console.log(error)
    }
    return data;
}

const todoForm = document.getElementById("todoForm");
const updateTodoForm = document.getElementById("updateTodoForm");
const todoContainer  = document.getElementById("todo-container");

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = e.target[0];
    const description = e.target[1];

    const newTodo = {
        id: todos.length + 1,
        title: title.value,
        description: description.value,
    };
    todos.push(newTodo);
    syncLocalStorage();
    title.value = "";
    description.value = "";
    refreshTodos();
});

updateTodoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const description = e.target[1].value;
    const id = Number(e.target[2].value);
    const todo = {
        id,
        title, 
        description
    }
    todos = todos.filter((element) => element.id !== id);
    todos.push(todo);
    syncLocalStorage();
    refreshTodos();
});

function refreshTodos() {
    todoContainer.innerHTML = "";
    for(let i = 0; i < todos.length; i++) {
        todoContainer.append(createTodoCard(todos[i]))
    }
}

function createTodoCard(data = {}) {
    const card = document.createElement('div');
    card.setAttribute("id", data.id);
    card.setAttribute("class", "bg-red-500 h-40 rounded p-3 todo-card");
    card.innerHTML = `
        <div class="content-container">
            <h2 class="text-md font-semibold">
                ${data.title}
            </h2>
            <p class="text-sm italic">
                ${data.description}
            </p>
        </div>
        <div class="icons-container flex" id="options">
        </div>
    `;
    const optionsContainer = card.children["options"];
    optionsContainer.append(...generateOptions(data.id));
    return card;
}

function generateOptions(id = 0) {
    const editBtn  = document.createElement("img");
    editBtn.setAttribute('class', 'icon');
    editBtn.setAttribute("id", id);
    editBtn.src = './assets/edit.svg';
    editBtn.addEventListener("click",handleEdit);
    const deleteBtn  = document.createElement("img");
    deleteBtn.setAttribute('class', 'icon');
    deleteBtn.setAttribute("id", id);
    deleteBtn.src = './assets/delete.svg';
    deleteBtn.addEventListener("click", handleDelete);
    return [editBtn, deleteBtn]
}

function handleEdit(e) {
    const matchingElement = todos.find((element) => element.id === Number(e.target.id));
    updateTodoForm.children[0].value = matchingElement.title;
    updateTodoForm.children[1].value = matchingElement.description;
    updateTodoForm.children[2].value = matchingElement.id;
}

function handleDelete(e) {
    todos = todos.filter((element) => element.id !== Number(e.target.id));
    syncLocalStorage();
    refreshTodos();
}

function syncLocalStorage() {
    try {
        localStorage.setItem("todos", JSON.stringify(todos));
    } catch (error) {
        console.log(error)
    }
}

refreshTodos();