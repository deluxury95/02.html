
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskContainer = document.getElementById('taskContainer');


document.addEventListener('DOMContentLoaded', loadTasks);


addButton.addEventListener('click', addTask);


function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const task = {
        text: taskText,
        date: new Date().toLocaleDateString('en-GB', {
            day: 'numeric', month: 'long', year: 'numeric'
        })
    };

    addTaskToDOM(task); 
    saveTaskToLocalStorage(task);

    taskInput.value = ''; 
}


function addTaskToDOM(task) {
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');

    const taskTitle = document.createElement('p');
    taskTitle.classList.add('task-title');
    taskTitle.textContent = task.text;

    const taskDate = document.createElement('p');
    taskDate.classList.add('task-date');
    taskDate.textContent = `Created on ${task.date}`;

    
}


function saveTaskToLocalStorage(task) {
    let tasks = getTasksFromLocalStorage();
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


function getTasksFromLocalStorage() {
    let tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
}


function loadTasks() {
    const tasks = getTasksFromLocalStorage();
    tasks.forEach(task => addTaskToDOM(task));
}

