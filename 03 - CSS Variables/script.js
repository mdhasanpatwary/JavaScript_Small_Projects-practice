
const inputs = document.querySelectorAll('.controls input');

function handleUpdate(random) {

    //const suffix = this.dataset.sizing || '';
    const suffix = this.dataset.sizing ? this.dataset.sizing : '';


    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);  
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));


/* 
 *** Normal way ***
const img = document.querySelector('#img');
if(this.name === 'spacing') {
    img.style.padding = this.value + 'px';
} else if(this.name === 'blur') {
    img.style.filter = `blur(${this.value}px)`;
} else if (this.name === 'base') {
    img.style.background = `${this.value}`;
}
*/