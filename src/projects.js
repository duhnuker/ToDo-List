export default Dependencies;

const Dependencies = (() => {
    const defaultProject = new Project('Default');
    const projects = [defaultProject];

    return {
        projects,
        defaultProject,
    };
})();

export default class Project {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.toDos = [];
    }
}
