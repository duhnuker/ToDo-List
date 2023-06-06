export { Project, createProject };
import { globalContainer } from "./index.js";

class Project {
    constructor(name, id) {
        this.name = name;
        this.toDos = [];
    }
}

function createProject(name) {
    globalContainer.projects.push(new Project(name));
}