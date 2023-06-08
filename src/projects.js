export { Project, createProject };
import { globalContainer } from "./index.js";

class Project {
    constructor(name) {
        this.name = name;
        this.toDoArray = [];
    }
}

function createProject(name) {
    globalContainer.allProjects.push(new Project(name));
}

