import { getTaskList, getProjectList, getCurrentProjectObject } from "./state.js";

export function renderProjects(){
    const unorderList = document.querySelector('.unorder-list');
    unorderList.textContent = '';
    for(const i in getProjectList()){
        const button = document.createElement('button');
        button.textContent = getProjectList()[i].title;
        button.classList.add('nav-button');
        button.id = i;
        unorderList.append(button);
    }
}

export function renderTasks(){
    const cardContainer = document.querySelector('.card-container') 
    cardContainer.textContent = '';
    
    for(const task of getTaskList()){
        const divElement = document.createElement('div');
        cardContainer.append(divElement);

        const card = document.createElement('div');
        card.classList.add('card-button');
        divElement.append(card);

        const taskTitle = document.createElement('h2');

        taskTitle.textContent = task.title;
        taskTitle.classList.add('card-header');
        card.append(taskTitle);

        const divHolder1 = document.createElement('div');
        divHolder1.classList.add('card-data-container');
        card.append(divHolder1);

        const taskTarget = document.createElement('p');
        taskTarget.textContent = 'Target';
        taskTarget.classList.add('label-p');
        divHolder1.append(taskTarget);
        
        const targetData = document.createElement('p');
        targetData.textContent = task.target;
        targetData.classList.add('data-p');
        divHolder1.append(targetData);

        const divHolder2 = document.createElement('div');
        divHolder2.classList.add('card-data-container');
        card.append(divHolder2);

        const taskPriority = document.createElement('p');
        taskPriority.textContent = 'Priority';
        taskPriority.classList.add('label-p');
        divHolder2.append(taskPriority);

        const priorityData = document.createElement('p');
        priorityData.textContent = task.priority;
        priorityData.classList.add('data-p');
        divHolder2.append(priorityData);

        const divHolder3= document.createElement('div');
        divHolder3.classList.add('card-data-container', 'relative');
        card.append(divHolder3);

        const svgString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>dots-horizontal</title><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" /></svg>`;
        divHolder3.innerHTML = svgString;

        const dropDown = document.createElement('div');
        dropDown.classList.add('three-dots');
        divHolder3.append(dropDown);

        const button = document.createElement('button')
        button.textContent = 'remove';
        button.classList.add('remove-task');
        dropDown.append(button);

        const collapsible = document.createElement('div');
        collapsible.classList.add('collapsible');
        divElement.append(collapsible);

        const descriptionLabel = document.createElement('p');
        descriptionLabel.textContent = 'description';
        descriptionLabel.classList.add('label-p');
        collapsible.append(descriptionLabel);

        const descriptionData = document.createElement('p');
        descriptionData.textContent = task.description;
        descriptionData.classList.add('data-p');
        collapsible.append(descriptionData);
    }
}

export function renderHeader(){
    const projectTitle = document.querySelector('.project-title');
    projectTitle.textContent = getCurrentProjectObject().title;
}

