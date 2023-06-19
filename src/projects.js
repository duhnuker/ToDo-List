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

//having issues where selected array is deleted, but also alltodoContainer is gone or invisible?
function deleteProject(projectToDelete) {
    globalContainer.allProjects.forEach((currentProject) => {
        let index = globalContainer.allProjects.indexOf(currentProject);
        globalContainer.allProjects.splice(index, 1);
    })
}
