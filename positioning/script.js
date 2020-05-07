//Variables
let tabBtnWrap = document.querySelectorAll('.tab--btn-wrap'),
    tabBtn = document.querySelectorAll('.tab--btn');

//Creating Node, Prepend & Slide Line
for(let i = 0; i < tabBtnWrap.length; i++) {
    //Create Node
    let newNode = document.createElement('div');
        newNode.setAttribute('class', 'tab--slide-line');

    //Prepend
    tabBtnWrap[i].prepend(newNode);

    //Animation & Positioning Slide Line
    let tabBtnInner = tabBtnWrap[i].querySelectorAll('.tab--btn');

    for(let j = 0; j < tabBtnInner.length; j++) {
        tabBtnInner[j].addEventListener('click', function() {
            let slideLine = this.parentNode.querySelector('.tab--slide-line');
            slideLine.setAttribute('style', 'left:'+ this.offsetLeft + 'px; width:' + this.offsetWidth + 'px;')
        })
    }
}


//Select First Element
let tabLine = document.querySelectorAll('.tab--slide-line');

for(let k = 0; k < tabLine.length; k++) {
    tabLine[k].setAttribute('style', 'left: 0px; width:' + tabLine[k].parentNode.querySelectorAll('.tab--btn')[0].offsetWidth + 'px;');
}