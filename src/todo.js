import { globalContainer } from './index.js';
import { Project } from './projects.js';
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
    let todo = new ToDo(description, priority, isCompleted, date);
    if (insertToProject === '') {
        globalContainer.allToDoContainer.toDoArray.push(todo);
    }
    globalContainer.allProjects.forEach((currentProject) => {
        if (currentProject.name === insertToProject) {
            globalContainer.allToDoContainer.toDoArray.push(todo)
            currentProject.toDoArray.push(todo)
        }
    })
}