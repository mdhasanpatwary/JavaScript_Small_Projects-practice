const panels = document.querySelectorAll('.panel');




function toggleOpen() {
    this.classList.toggle('open');
}

function toggleOpenActive(e) {
    //if(e.propertyName === 'flex-grow')//safari use just flex thst's why we use incluses method.
    
    if(e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    };
    
    
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));

panels.forEach(panel => panel.addEventListener('transitionend', toggleOpenActive));
