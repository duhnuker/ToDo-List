import { globalContainer } from './index.js';
export { ToDo };

class ToDo {
    constructor(description, priority, isCompleted, date) {
        this.description = description;
        this.priority = priority;
        this.isCompleted = isCompleted;
        this.date = date;
    }
}


// function createToDo(
//     description, 
//     priority, 
//     isCompleted, 
//     date,
//     insertToProject = ''
//     ) {
//         //if no project name insert to allToDoContainer
//     let todo = new ToDo(description, priority, isCompleted, date);
//     if (insertToProject === '') {
//         globalContainer.allToDoContainer.push(todo);
//     }
//     globalContainer.allProjects.forEach((currentProject) => {
//         if (currentProject.name === insertToProject) {
//             globalContainer.allToDoContainer.push(todo)
//             currentProject.allProjects.push(todo)
//         }
//     })
// }