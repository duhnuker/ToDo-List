export default class Project {
    constructor(name) {
        this.name;
        this.todoContainer
    }

    setProjectName(name) {
        this.name = name;
    }

    getProjectName() {
        return this.name;
    }

    getAllToDos() {
        return this.todoContainer;
    }

    getToDo(toDoName) { 
        return this.todoContainer.find((todo) => (todo.name = todoName)); 
    }

    addToDo(newToDo) {
        this.todoContainer.push(todo);
    }

    deleteToDo(todoName) {
        const todo = this.todoContainer.find((todo) => todo.name === todoName);
        this.todoContainer.splice(this.todoContainer.indexOf(todo), 1);
    }
}
