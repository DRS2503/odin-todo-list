import { addProject, getProjectList, getTaskList, getCurrentProjectIndex, getCurrentProjectObject, addTask, setCurrentProject, removeCurrentProject } from './modules/state.js';
import { removeTaskListener, NewTaskButton, cardClickListener, dotsClickListener, navButtonListeners, removeProjectListener, newProjectCLickListener } from './modules/events.js';
import { renderProjects, renderTasks, renderHeader } from './modules/DOMController.js'

addProject('work');
setCurrentProject(1);

addTask('task1', 'target1', 'low', 'as;djf;jd;lkasjf;ksjaklf');
addTask('task2', 'target2', 'medium', 'eropiqweurpoiqwurpqwouriop');
addTask('task3', 'target3', 'high', '/////vm/xvm,bmvcx.,nmnv')

addProject('School');
setCurrentProject(2);
addTask('task3', 'target3', 'high', '/////vm/xvm,bmvcx.,nmnv')


renderProjects();
renderHeader();
renderTasks();

navButtonListeners();
dotsClickListener();
cardClickListener();
removeProjectListener();
newProjectCLickListener();
NewTaskButton();
removeTaskListener();




