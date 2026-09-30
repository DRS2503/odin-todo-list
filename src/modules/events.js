
export function navButtonClickListener() {
    //onclick render main with project data

}

export function cardClickListener() {
    const cardList = document.querySelectorAll('.card-button');
    for (const card of cardList) {
        card.addEventListener('click', () => {
            const content = card.nextElementSibling;
            if (content.style.display === 'block') {
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

export function newProjectCLickListener() {

}

export function newTaskClickListener() {

}
