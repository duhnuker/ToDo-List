import './todo.js'
import { populateStorage } from './local-storage'; 

export default class Project {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.toDos = [];
    }
}

function createProject(name) {
    allToDoContainer.projects.push(new Project(name));
}




