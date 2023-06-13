import { Project, createProject } from './projects.js';
import { ToDo, createToDo } from './todo.js';
export { globalContainer };

let globalContainer = (function() {

    let allToDoContainer = new Project('allToDoContainer');
    let allProjects = [allToDoContainer];

    return {
        allToDoContainer,
        allProjects,
    }
})();


//s1

createProject('Groceries');
console.log(globalContainer);

//s2

createProject('School');

let todo1 = new ToDo('Get two pencils for math', 'High', 'Not Complete', '09/06/2023');

//s3

//adds to project allToDoContainer's toDoArray
globalContainer.allProjects[0].toDoArray.push(todo1);

//adds to project School's toDoArray
globalContainer.allProjects[2].toDoArray.push(todo1);

//s4 showfolders()

//s5

createProject('Cleaning');

let todo2 = new ToDo('Clean the kitchen', 'Medium', 'Not Complete', '09/06/2023');
let todo3 = new ToDo('Wipe down the tv screen', 'Low', 'Not Complete', '09/06/2023');
let todo4 = new ToDo('Take out the trash', 'High', 'Not Complete', '09/06/2023');

globalContainer.allProjects[3].toDoArray.push(todo2, todo3, todo4);

//s6 showToDo()

//s7
// delete ToDo with splice()

//s8 deleteFolder('ToDo1,ToDo2') use array.length = 0;


