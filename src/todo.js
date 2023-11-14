export default class ToDo {
    constructor(name, dueDate = 'No Date') {
        this.name = name;
        this.dueDate = dueDate
    }

setToDoName(name) {
    this.name = name;
}

getToDoName() {
    return this.name
}

setToDoDate(dueDate) {
    this.dueDate = duedate;
}

getToDoDate() {
    return this.dueDate
}

}