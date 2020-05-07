window.onload = function() {
    //Selector
    let taskField = document.querySelector('#taskField');
    let taskBtn = document.querySelector('#taskBtn');
    let allTask = document.querySelector('#allTask');

    // taskBtn.addEventListener('click', function(e) {
    //     createNewTask(allTask, e.target.value)
    //     taskField.value = ''
    // })

    taskField.addEventListener('keypress', function(e) {
        if(e.keyCode === 13) {
           createNewTask(allTask, e.target.value);
           this.value = '';

           console.log(123);
           
        }
    })

    function createNewTask(parent, task) {
        let col = document.createElement('div');
            col.className = 'col-md-3';

        let singleTask = document.createElement('div');
            singleTask.className = 'single-task d-flex';

        let singleTaskP = document.createElement('p');
            singleTaskP.innerHTML = task;
            singleTask.appendChild(singleTaskP);
        
        let span = document.createElement('span');
            span.className = 'ml-auto';
            span.innerHTML = '<i class="fa fa-times-circle"></i>';
            singleTask.appendChild(span);

            span.addEventListener('click', function() {
                parent.removeChild(col);
            })

        let taskControler = createControlPanel(singleTask);
            taskControler.style.visibility = 'hidden';
            singleTask.appendChild(taskControler);

            // singleTask.addEventListener('mouseenter', function() {
            //     taskControler.style.visibility = 'visible'
            // })
            singleTask.onmouseenter = function() {
                taskControler.style.visibility = 'visible';
            }
            singleTask.onmouseleave = function() {
                taskControler.style.visibility = 'hidden';
            }

            col.appendChild(singleTask);
            parent.appendChild(col);
    }

    function createControlPanel(parent) {
        let controlPanel = document.createElement('div');
            controlPanel.className = 'task-control-panel d-flex align-items-center';

            let colorPlate = createColorPlate(parent);
            controlPanel.appendChild(colorPlate);
            
            let editBtn = createEditBtn(parent);
            controlPanel.appendChild(editBtn);

        return controlPanel;
    }

    function createEditBtn(parent) {
        let span = document.createElement('span');
            span.className = 'ml-auto mr-2';
            span.style.color = '#fff';
            span.innerHTML = '<i class="fas fa-edit"></i>';
            span.addEventListener('click', function() {
                let p = parent.querySelector('p');
                let textArea = document.createElement('textarea');
                    textArea.className = 'inner-textarea';

                    textArea.style.height = parent.offsetHeight + 'px';
                    textArea.style.width = parent.offsetWidth + 'px';
                    textArea.innerHTML = p.innerHTML;

                    textArea.addEventListener('keypress', function(e) {

                        if(e.keyCode === 13) {

                            e.stopPropagation();

                            if(this.value) {
                                p.innerHTML = this.value;
                                parent.removeChild(this);
                            } else {
                                alert('Please put some data');
                            }
                        }
                    })

                    parent.appendChild(textArea);
            })
            return span;
    }



    function createColorPlate(parent) {
        let colors = ['red', 'green', 'yellow', 'blue', 'tomato'];

        let colorDiv = document.createElement('div');
            colorDiv.className = 'd-flex';


        colors.forEach( function(color) {
            let div = document.createElement('div');
                div.className = 'color-circle ml-1';
                div.style.background = color;
                div.addEventListener('click', function() {
                    parent.style.background = color;
                    console.log(singleTask);
                    
                })
                colorDiv.appendChild(div);
        })

        return colorDiv;
    }


}