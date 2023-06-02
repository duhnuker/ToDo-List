import './todo.js'
import { populateStorage } from './local-storage'; 

let allProjectContainer = (function() {

    let defaultProject = new Project('Default');
    let projects = [defaultProject];

    return {
        defaultProject,
        projects,
    }
})();

export default class Project {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.toDos = [];
    }
}




