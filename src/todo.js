import { globalContainer } from './index.js';
export { ToDo, createToDo };

class ToDo {
    constructor(description, priority, isCompleted, date) {
        this.description = description;
        this.priority = priority;
        this.isCompleted = isCompleted;
        this.date = date;
    }
}

function createToDo(
    description, 
    priority, 
    isCompleted, 
    date,
    insertToProject = ''
    ) {
        //if no project name insert to defaultProjectFolder
    let todo = new ToDo(description, priority, isCompleted, date);
    if (insertToProject === '') {
        globalContainer.defaultProjectFolder.push(todo);
    }
    globalContainer.projects.forEach((currentProject) => {
        if (currentProject.name === insertToProject) {
            globalContainer.defaultProjectFolder.push(todo)
            currentProject.projects.push(todo)
        }
    })
}