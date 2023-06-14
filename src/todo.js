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

//s2 create folder, create todo

// createProject('School');

// let todo1 = new ToDo('Get two pencils for math', 'High', 'Not Complete', '09/06/2023');

// //s3 create todo(adds to desired folder)

// //adds to project allToDoContainer's toDoArray
// globalContainer.allProjects[0].toDoArray.push(todo1);

// //adds to project School's toDoArray
// globalContainer.allProjects[2].toDoArray.push(todo1);

function createToDo(
    description, 
    priority, 
    isCompleted, 
    date,
    insertToProject = ''
    ) {
        //if no project name insert to allToDoContainer
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