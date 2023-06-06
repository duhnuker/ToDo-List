export { ToDo };
import { Project } from './projects.js';

class ToDo {
    constructor(description, priority, isCompleted, date) {
        this.description = description;
        this.priority = priority;
        this.isCompleted = isCompleted;
        this.date = date;
    }
}

function createToDo(
    name, 
    priority, 
    isCompleted, 
    date,
    insertToProject = ''
    ) {
        //if no project name insert to defaultProjectFolder
    let todo = new ToDo(name, priority, isCompleted, date);
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