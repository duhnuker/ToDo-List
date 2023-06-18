export { Project, createProject, showProjects, deleteProject };
import { globalContainer } from "./index.js";

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

function showProjects() {
    console.log(globalContainer.allProjects);
}

function createProject(name) {
    globalContainer.allProjects.push(new Project(name));
}

function deleteProject(projectToDelete) {
    globalContainer.allProjects.forEach((currentProject) => {
        //get index of currentProject so it can be spliced out
        let index = globalContainer.allProjects.indexOf(currentProject);
        globalContainer.allProjects.splice(index, 1);
    })
}