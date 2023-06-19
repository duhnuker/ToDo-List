import { Project, createProject, showProjectToDos, showProjects, deleteProject } from './projects.js';
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

createProject('School')
createToDo('Wear a tie', 'High', 'Not Complete', '15/06/2023', 'School');
showProjects();

// //s5 create 3 todo's in 1 folder, view all todo's in that 1 folder

// createProject('Cleaning');

// let todo2 = new ToDo('Clean the kitchen', 'Medium', 'Not Complete', '09/06/2023');
// let todo3 = new ToDo('Wipe down the tv screen', 'Low', 'Not Complete', '09/06/2023');
// let todo4 = new ToDo('Take out the trash', 'High', 'Not Complete', '09/06/2023');

// //Needs to by default be added to allToDoContainer
// globalContainer.allProjects[0].toDoArray.push(todo2, todo3, todo4);
// //Then is added to Cleaning Project
// globalContainer.allProjects[3].toDoArray.push(todo2, todo3, todo4);

// //s6 view 1 todo

// console.log(globalContainer.allProjects[3].toDoArray[1], 's6');

// //s7 delete single todo
// //remove from allToDoContainer
// console.log(globalContainer.allProjects[0].toDoArray.splice(1,1), 's7');
// //remove from Cleaning toDoArray
// console.log(globalContainer.allProjects[3].toDoArray.splice(0,1), 's7');

// //s8 delete whole folder and its todo's

// console.log(globalContainer.allProjects.splice(1,1), 's8'); //position one, 1 item removed//
