export default Dependencies;
import './todo.js'

const Dependencies = (() => {
    const defaultProject = new Project('Default');
    const project = [defaultProject];

    return {
        project,
        defaultProject,
    };
})();

export default class Project {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.toDos = [];
    }
}

function createProject(name) {
    Dependencies.project.push(new Project(name))
}
