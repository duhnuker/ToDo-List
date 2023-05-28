import Project from "./projects";

export class ToDo {
    constructor(name, priority, isCompleted, date) {
        this.name = name;
        this.priority = priority;
        this.isCompleted = isCompleted;
        this.date = date;
    }
}
