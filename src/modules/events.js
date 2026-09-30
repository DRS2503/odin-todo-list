
import { getCurrentProjectObject, getProjectList, setCurrentProject, getTaskList, removeCurrentProject } from "./state.js";
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


const newProjectDialog = document.querySelector('.new-project-dialog');
const newProjectForm = document.querySelector('new-project-form');

export function newProjectCLickListener() {
    document.querySelector('.new-project-button').addEventListener('click', () => {
        newProjectDialog.showModal();
    })
}

export function projectCloseButton() {
    newProjectDialog.close();
    newProjectForm.reset();
}

export function projectSubmitButton() {

}

export function newTaskClickListener() {

}
