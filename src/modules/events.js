
import { removeTasks, addProject, addTask, getCurrentProjectObject, getProjectList, setCurrentProject, getTaskList, removeCurrentProject } from "./state.js";
import { renderHeader, renderTasks, renderProjects} from "./DOMController.js";

export function navButtonListeners() {
    const navButtons = document.querySelectorAll('.nav-button');
    for (const button of navButtons) {
        button.addEventListener('click', () => {
            setCurrentProject(button.id);
            renderHeader(getCurrentProjectObject().title);
            renderTasks(getTaskList());
            //Add event listeners
            dotsClickListener();
            cardClickListener();
            removeTaskListener();
        })
    }
}

export function cardClickListener() {
    const cardList = document.querySelectorAll('.card-button');
    for (const card of cardList) {
        card.addEventListener('click', () => {
            const content = card.nextElementSibling;
            const styles = window.getComputedStyle(content);
            const display = styles.display;
            if (display === 'block') {
                content.style.setProperty('display', 'none');
                card.style.setProperty('border-radius', '1rem 1rem 1rem 1rem');
            }
            else {
                content.style.setProperty('display', 'block');
                card.style.setProperty('border-radius', '1rem 1rem 0px 0px');
            }
        });
    }
}

export function dotsClickListener() {
    const threeDotList = document.querySelectorAll('svg');
    for (const dot of threeDotList) {
        dot.addEventListener('click', (e) => {
            e.stopPropagation();
            const content = dot.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.setProperty('display', 'none');
            }
            else {
                content.style.setProperty('display', 'block');
            }
        });
    }
}

export function removeTaskListener() {
    const list = document.querySelectorAll('.remove-task');
    for(const item of list){
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            removeTasks(item.id);
            renderTasks();
        })
    }
}


export function removeProjectListener() {
    const removeProject = document.querySelector('.remove-project-button');
    removeProject.addEventListener('click', () => {
        if(getProjectList().length > 1){
            removeCurrentProject();
            setCurrentProject(0);
            renderProjects()
            renderHeader();
            renderTasks();
            navButtonListeners();
            dotsClickListener();
            cardClickListener();
        }
        else{
            alert('must have 1 project');
        }
    })
}

export function newProjectCLickListener() {
    const newProjectDialog = document.querySelector('.new-project-dialog');
    const newProjectForm = document.querySelector('.new-project-form');
    document.querySelector('.new-project-button').addEventListener('click', () => {
        newProjectDialog.showModal();
    })
    
    document.querySelector('.project-close-button').addEventListener('click', () => {
        newProjectForm.reset();
        newProjectDialog.close();
    })

    document.querySelector('.project-submit-button').addEventListener('click', () => {
        const formData = new FormData(newProjectForm);
        addProject(formData.get('title'));
        renderProjects();
        navButtonListeners();
        removeTaskListener();
        newProjectForm.reset();
    })
}

export function NewTaskButton() {
    const taskDialog = document.querySelector('.new-task-dialog');
    const taskForm = document.querySelector('.new-task-form');

    document.querySelector('.new-task-button').addEventListener('click', () => {
        taskDialog.show();
    })

    document.querySelector('.task-close-button').addEventListener('click', () => {
        taskForm.reset();
        taskDialog.close();
    })

    document.querySelector('.task-submit-button').addEventListener('click', () => {
        const formData = new FormData(taskForm);
        addTask(formData.get('title'), formData.get('target'), formData.get('priority'), formData.get('description'));
        renderTasks();
        cardClickListener();
        dotsClickListener();
        removeTaskListener();
        taskForm.reset();
    })
}

