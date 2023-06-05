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


let project1 = new Project("Groceries", "5920");

console.log(project1);

export { createProject };