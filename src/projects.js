export { Project, createProject };
import { globalContainer } from "./index.js";

// //s1 create a folder

// createProject('Groceries');
// console.log(globalContainer);

class Project {
    constructor(name) {
        this.name = name;
        this.toDoArray = [];
    }

    showToDo(){
        this.toDoArray.forEach((todo) => {
        console.log(todo);
        })
    }
}

function createProject(name) {
    globalContainer.allProjects.push(new Project(name));
}

