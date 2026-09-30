import { Project } from '../Factories/project.js';
import { Task } from '../Factories/task.js'

let projectList = [];
const defaultProject = Project('First Project');
projectList.push(defaultProject);
let currentProjectIndex = 0;
let currentProjectObject = projectList[0]; 


export const addProject = (title) => {
    const newProject = Project(title);
    projectList.push(newProject);
}

export const addTask = (title, target, priority, description) => {
    currentProjectObject.addTask(Task(title, target, priority, description));
}

export const getProjectList = () => { 
    if(projectList.length > 0 ){
        return [...projectList]; 
    }
};

export const getCurrentProjectIndex = () => { 
    if(projectList.length > 0 ){
        return currentProjectIndex; 
    }
};

export const getCurrentProjectObject = () => { 
    if(projectList.length > 0 ){
        return currentProjectObject; 
    }
};

export const getTaskList = () => {
    return currentProjectObject.getTaskList();
}

export const setCurrentProject = (index) => {
    currentProjectIndex = index;
    currentProjectObject = projectList[index];
}

export const removeCurrentProject = () => {
    projectList.splice(currentProjectIndex, 1);
    setCurrentProject(0);
}
