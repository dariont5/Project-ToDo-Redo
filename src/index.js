import './style.css'
import {createToDo, createProject } from "./logic.js";
import {compareAsc, format} from "date-fns";
window.createToDo = createToDo
window.createProject = createProject

const projectList = document.getElementById('project-list');
const mainContainer = document.getElementById('main-container')

const projectButton = document.getElementById('project-button')
projectButton.addEventListener("click", () => {
    const newProject = document.createElement('li');
    newProject.classList.add('project-list-child');
    newProject.classList.add('hover')
    newProject.setAttribute('contenteditable', 'true')
    projectList.appendChild(newProject)
    newProject.focus()
    newProject.addEventListener("dblclick", () => {
        newProject.setAttribute('contenteditable', 'true')
    })
    newProject.addEventListener('blur', () => {
        newProject.setAttribute('contenteditable', 'false')
        newProjectObject.name = newProject.textContent
        generateProjectPage(newProjectObject)
    })
    const newProjectObject = createProject("placeholder")
    newProject.addEventListener("click", () => {
        generateProjectPage(newProjectObject);
    })
})

const clearMain = function () {
    mainContainer.innerHTML = ""
}

const generateProjectHeader = function (Project) {
    const headerName = Project.name;
    const header = document.createElement('h1')
    header.textContent = headerName;
    mainContainer.appendChild(header)
}

const generateProjectPage = function (Project) {
    clearMain();
    generateProjectHeader(Project);
    createMainBottom()
}

const createMainBottom = function () {
    const addBottomMain = document.createElement('section');
    addBottomMain.classList.add('main-bottom')
    addBottomMain.classList.add('glass')
    addBottomMain.classList.add('flex')

    const taskButton = document.createElement('h3')
    taskButton.classList.add('hover')
    taskButton.classList.add('invert')
    taskButton.textContent = 'Add A New Task'
    taskButton.addEventListener('click', createNewTask)
    addBottomMain.appendChild(taskButton)

    mainContainer.appendChild(addBottomMain);
}

const createNewTask = function () {
    const task = document.createElement('div');
    const blockOne = document.createElement('p');
    const name = document.createElement('input');
    name.setAttribute('class', 'name')
    name.setAttribute('type', 'text');
    name.setAttribute('placeholder', 'Task Name...')

    blockOne.appendChild(name);
    task.appendChild(blockOne);
    mainContainer.appendChild(task);
}