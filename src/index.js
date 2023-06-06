import { Project, createProject } from './projects.js';
import { ToDo } from './todo.js';
export { globalContainer };

let globalContainer = (function() {

    let defaultProjectFolder = new Project('Default');
    let projects = [defaultProjectFolder];

    return {
        defaultProjectFolder,
        projects,
    }
})();

createProject('Groceries');


console.log(globalContainer);


// let project1 = new Project("Groceries");
// console.log(project1);

// let todo1 = new ToDo('Buy Tomatoes', 'low', 'not complete', '06/06/2023');
// console.log(todo1);


