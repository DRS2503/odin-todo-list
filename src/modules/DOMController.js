
export function renderProjects(array){
    const unorderList = document.querySelector('.unorder-list');
    unorderList.textContent = '';
    for(const i in array){
        const button = document.createElement('button');
        button.textContent = array[i].title;
        button.classList.add('nav-button');
        unorderList.append(button);
    }
}