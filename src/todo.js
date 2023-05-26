import { Dependencies, Project } from "./projects";

export class ToDo {
    constructor(name, priority, isCompleted, date) {
        this.name = name;
        this.priority = priority;
        this.isCompleted = isCompleted;
        this.date = date;
    }
}

export function createToDo (name, priority, isCompleted, date, projectToInsert = '') {
    let todo = new ToDo(name, priority, isCompleted, date)
    if (projectToInsert === '') {
        Dependencies.defaultProject.project.push(todo)
    }
    Dependencies.project.forEach((currentProject) => {
        if (currentProject.name === projectToInsert) {
            Dependencies.defaultProject.project.push(todo)
            currentProject.project.push(todo)
        }
    })
}

