import { addProject, getProjectList, getTaskList, getCurrentProjectIndex, getCurrentProjectObject, addTask, setCurrentProject, removeCurrentProject } from './modules/state.js';
import { removeTaskListener, NewTaskButton, cardClickListener, dotsClickListener, navButtonListeners, removeProjectListener, newProjectCLickListener } from './modules/events.js';
import { renderProjects, renderTasks, renderHeader } from './modules/DOMController.js'

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




