import './style.css'
import {createToDo, createProject } from "./logic.js";
window.createToDo = createToDo
window.createProject = createProject

const projectList = document.getElementById('project-list');

const projectButton = document.getElementById('project-button')
projectButton.addEventListener("click", () => {
    const newProject = document.createElement('li');
    newProject.classList.add('project-list-child')
    newProject.setAttribute('contenteditable', 'true')
    projectList.appendChild(newProject)
    newProject.focus()
    newProject.addEventListener("dblclick", () => {
        newProject.setAttribute('contenteditable', 'true')
    })
    newProject.addEventListener('blur', () => {
        newProject.setAttribute('contenteditable', 'false')
        newProjectObject.name = newProject.textContent
        console.log(newProjectObject.name)
    })
    const newProjectObject = createProject("placeholder")
})