// planning
/*
For todos cards:
ToDo(list) = [ToDoObject1, ToDoObject2]
ToDoObjectState = {
    title:,
    description:,
    dueDate:,
    priority:,
    notes:,
    update: function (stateVar, value),
    delete: function - removes from list,
}
* composition?
*/ 

// ToDoObject
function canUpdateTitle(state) {
    return {
        updateTitle(value) {
            state.title = value;
        }
    }
}

const canUpdateDescription = (state) => ({
    updateDescription(value) {
        state.description = value;
    }
})

const canUpdateDueDate = (state) => ({
    updateDueDate(value) {
        state.dueDate = value;
    }
})

const canUpdatePriority = (state) => ({
    updatePriority(value) {
        state.priority = value;
    }
})

const canUpdateNotes = (state) => ({
    updateNotes(value) {
        state.notes = value;
    }
})

const canDelete = (state) => ({
    delete() {
        state.keepFlag = false;
    }
})

const canViewState = (state) => ({
    viewState() {
        console.log(state);
    }
})

export function createToDo(title, description, dueDate, priority, notes) {
    const state = {
        title,
        description,
        dueDate,
        priority,
        notes,
        keepFlag: true,
    }
    const ToDoObject = Object.assign(
        {},
        canUpdateTitle(state),
        canUpdateDescription(state),
        canUpdateDueDate(state),
        canUpdatePriority(state),
        canUpdateNotes(state),
        canDelete(state),
        canViewState(state),
    )
    return ToDoObject
}


// // ToDoDisplay
// export const displayHandler = {
//     state: [],
//     add: function (obj) {
//         this.state.push(obj)
//     },
//     update() {
//         this.state = this.state.filter(obj => obj.keepFlag == true)
//     }
// }

// Project Composition
const canAddToProject = (state) => ({
    addToProject(obj) {
        state.contents.push(obj)
    }
})

const canUpdate = (state) => ({
    update() {
        state.contents = state.contents.filter(obj => obj.keepFlag == true)
    }
})

const canViewName = (state) => ({
    viewName() {
        console.log(state.name)
    }
})

const canViewContents = (state) => ({
    viewContents() {
        console.log(state.contents)
    }
})

// Project Handler
export function createProject(name) {
    const state = {
        name,
        contents: [],
    }
    const ProjectObject = Object.assign(
        {},
        canAddToProject(state),
        canUpdate(state),
        canViewName(state),
        canViewContents(state)
    )
    return ProjectObject
}