import { addProject, getProjectList, getTaskList, getCurrentProjectIndex, getCurrentProjectObject, addTask, setCurrentProject, removeCurrentProject } from './modules/state.js';

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
addTask('task2','target2', 'medium', 'eropiqweurpoiqwurpqwouriop');
addTask('task3','target3', 'high', '/////vm/xvm,bmvcx.,nmnv')
console.log('Task List:', getTaskList());
console.log("");
console.log("");

addProject('School');
setCurrentProject(2);
console.log('List:', getProjectList());
console.log('Index:', getCurrentProjectIndex());
console.log('Project:', getCurrentProjectObject());
addTask('task3','target3', 'high', '/////vm/xvm,bmvcx.,nmnv')
console.log('Task List:', getTaskList());
console.log("");
console.log("");

removeCurrentProject();
console.log('List:', getProjectList());
console.log('Index:', getCurrentProjectIndex());
console.log('Project:', getCurrentProjectObject());



//const project2 = Project('School');
//const task1 = Task('task1', 'target1', 'low', 'as;djf;jd;lkasjf;ksjaklf');
//const task2 = Task('task2','target2', 'medium', 'eropiqweurpoiqwurpqwouriop');
//const task3 = Task('task3','target3', 'high', '/////vm/xvm,bmvcx.,nmnv');


