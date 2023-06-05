import Project from "./projects";

let allToDoContainer = (function() {

    let defaultProjectFolder = new Project('Default');
    let projects = [defaultProject];

    return {
        defaultProjectFolder,
        projects,
    }
})();

export class ToDo {
    constructor(name, priority, isCompleted, date) {
        this.name = name;
        this.priority = priority;
        this.isCompleted = isCompleted;
        this.date = date;
    }
}

function createToDo(
    name, 
    priority, 
    isCompleted, 
    date,
    insertToProject = ''
    ) {
        //if no project name insert to defaultProjectFolder
    let todo = new ToDo(name, priority, isCompleted, date);
    if (insertToProject === '') {
        allToDoContainer.defaultProjectFolder.push(todo);
    }
    allToDoContainer.projects.forEach((currentProject) => {
        if (currentProject.name === insertToProject) {
            allToDoContainer.defaultProjectFolder.push(todo)
            currentProject.projects.push(todo)
        }
    })
}