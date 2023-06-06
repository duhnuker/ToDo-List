import { Project, createProject } from './projects.js';
import { createToDo } from './todo.js';
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


