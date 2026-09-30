import { addProject, getProjectList, getTaskList, getCurrentProjectIndex, getCurrentProjectObject, addTask, setCurrentProject, removeCurrentProject } from './modules/state.js';
import { cardClickListener, dotsClickListener } from './modules/events.js';
import { renderProjects } from './modules/DOMController.js'

console.log('List:', getProjectList());
console.log('Index:', getCurrentProjectIndex());
console.log('Project:', getCurrentProjectObject());
console.log("");
console.log("");

addProject('work');
setCurrentProject(1);
console.log('List:', getProjectList());
console.log('Index:', getCurrentProjectIndex());
console.log('Project:', getCurrentProjectObject());

addTask('task1', 'target1', 'low', 'as;djf;jd;lkasjf;ksjaklf');
addTask('task2', 'target2', 'medium', 'eropiqweurpoiqwurpqwouriop');
addTask('task3', 'target3', 'high', '/////vm/xvm,bmvcx.,nmnv')
console.log('Task List:', getTaskList());
console.log("");
console.log("");

addProject('School');
setCurrentProject(2);
console.log('List:', getProjectList());
console.log('Index:', getCurrentProjectIndex());
console.log('Project:', getCurrentProjectObject());
addTask('task3', 'target3', 'high', '/////vm/xvm,bmvcx.,nmnv')
console.log('Task List:', getTaskList());
console.log("");
console.log("");

//removeCurrentProject();
//console.log('List:', getProjectList());
//console.log('Index:', getCurrentProjectIndex());
//console.log('Project:', getCurrentProjectObject());



//const project2 = Project('School');
//const task1 = Task('task1', 'target1', 'low', 'as;djf;jd;lkasjf;ksjaklf');
//const task2 = Task('task2','target2', 'medium', 'eropiqweurpoiqwurpqwouriop');
//const task3 = Task('task3','target3', 'high', '/////vm/xvm,bmvcx.,nmnv');

dotsClickListener();
cardClickListener();



renderProjects(getProjectList());

renderHeader(getCurrentProjectObject().title);


function renderHeader(title){
    const projectTitle = document.querySelector('.project-title');
    projectTitle.textContent = title;
}

function renderTasks(array) {
    const cardContainer = document.querySelector('.card-container') 
    for(const task of array);{
        const card = document.createElement('div')
        const taskTitle = document.createElement('h2');
        const taskTarket = document.createElement('p');
        const targetData = document.createElement('p');
        const taskPriority = document.createElement('p');
        const priorityData = document.createElement('p');
        const svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>dots-horizontal</title><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" /></svg>'
        const dropDown = document.createElement('div');
        const button = document.createElement('button')

    }
}


