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
    task.classList.add('task');
    const blockOne = document.createElement('p');
    const name = document.createElement('input');
    name.setAttribute('class', 'name');
    name.setAttribute('type', 'text');
    name.setAttribute('placeholder', 'Task Name: ');
    blockOne.appendChild(name);
    task.appendChild(blockOne);

    const blockTwo = document.createElement('p');
    const description = document.createElement('input');
    description.classList.add('description');
    description.setAttribute('placeholder', 'Description: ');
    description.setAttribute('type', 'text');
    blockTwo.appendChild(description);
    task.appendChild(blockTwo);

    const blockThree = document.createElement('p');
    const dueDate = document.createElement('input');
    dueDate.setAttribute('type','date');
    dueDate.setAttribute('id', dueDate)
    const dueDateLabel = document.createElement('label')
    dueDateLabel.textContent = 'Due Date: '
    dueDateLabel.setAttribute('for', 'dueDate')
    const dueDateBlock = document.createElement('div');
    dueDateBlock.appendChild(dueDateLabel);
    dueDateBlock.appendChild(dueDate);
    blockThree.appendChild(dueDateBlock);

    const fieldset = document.createElement('fieldset');
    const legend = document.createElement('legend');
    legend.textContent = 'Priority:'
    fieldset.appendChild(legend);

    const radioBlockOne = document.createElement('div');
    const radioBlockTwo = document.createElement('div');
    const radioBlockThree = document.createElement('div');
    const blockThreeRadioBlocks = [radioBlockOne,radioBlockTwo, radioBlockThree];

    const radio_id_value = ['low','med','high'];
    const optionOne = document.createElement('input');
    const optionTwo = document.createElement('input');
    const optionThree = document.createElement('input')
    const optionList = [optionOne, optionTwo, optionThree];

    for (let i = 0; i < 3; i++) {
        optionList[i].setAttribute('type', 'radio');
        optionList[i].setAttribute('id', radio_id_value[i]);
        optionList[i].setAttribute('name', 'priority_designation');
        optionList[i].setAttribute('value' , radio_id_value[i]);
    }

    const option_labels = ['Low', 'Med', 'High'];
    const optionOneLabel = document.createElement('label');
    const optionTwoLabel = document.createElement('label');
    const optionThreeLabel = document.createElement('label');
    const optionLabelsList = [optionOneLabel, optionTwoLabel, optionThreeLabel];

    for (let i = 0; i < 3; i++) {
        optionLabelsList[i].setAttribute('for', radio_id_value[i]);
        optionLabelsList[i].textContent = option_labels[i];
    }

    for (let i = 0; i < 3; i++) {
        blockThreeRadioBlocks[i].appendChild(optionList[i]);
        blockThreeRadioBlocks[i].appendChild(optionLabelsList[i]);
        fieldset.appendChild(blockThreeRadioBlocks[i]);
    }

    blockThree.appendChild(fieldset);
    task.appendChild(blockThree);

    const blockFour = document.createElement('p')
    const notes = document.createElement('textarea');
    notes.setAttribute('placeholder', 'Notes: ')
    notes.classList.add('notes')
    blockFour.appendChild(notes)
    task.appendChild(blockFour)

    const blockFive = document.createElement('p');
    const deleteButton = document.createElement('h4');
    deleteButton.classList.add('hover');
    deleteButton.classList.add('invert');
    deleteButton.textContent = 'Delete'
    blockFive.appendChild(deleteButton);
    task.appendChild(blockFive);
    
    mainContainer.appendChild(task);
}