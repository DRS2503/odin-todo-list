import { Project } from '../Factories/project.js';
import { Task } from '../Factories/task.js'


let projectList = load() ?? [Project('First Project')];
let currentProjectIndex = 0;
let currentProjectObject = projectList[0];

save();

function save() {
  try {
    const data = projectList.map(p => ({
      title: p.title, // adjust to your project's properties
      tasks: p.getTaskList().map(t => ({
        title: t.title,
        target: t.target,
        priority: t.priority,
        description: t.description
      }))
    }));
    localStorage.setItem('projectList', JSON.stringify(data));
  } catch (err) {
    console.error('Save failed:', err);
  }
}

function load() {
  try {
    const data = JSON.parse(localStorage.getItem('projectList'));
    if (!Array.isArray(data)) return null;

    return data.map(p => {
      const project = Project(p.title);
      p.tasks.forEach(t =>
        project.addTask(Task(t.title, t.target, t.priority, t.description))
      );
      return project;
    });
  } catch {
    return null;
  }
}

export const addProject = (title) => {
    const newProject = Project(title);
    projectList.push(newProject);
    save();
}

export const addTask = (title, target, priority, description) => {
    currentProjectObject.addTask(Task(title, target, priority, description));
    save();
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
    localStorage.setItem('projectList', JSON.stringify(projectList));
    save();
}

export const removeTasks = (index) => {
    currentProjectObject.removeTask(index);
    save();
}
