const checkboxes = document.querySelectorAll('.inbox input[type=checkbox]');

let lastChecked;

function handlecheck(e) {
    //check if they had the shift key down.
    //And check that they are checking it.
    let inBetween = false;
    
    if ( e.shiftKey && this.checked ) {
        //go ahed and do what we place
        //loop over every single checkbox
        checkboxes.forEach(checkbox => {
            
            if(checkbox === this || checkbox === lastChecked) {
                
                inBetween = !inBetween;
                console.log('starting to check them inbetween!'); 
            }
            if (inBetween) {
                checkbox.checked = true;
            }

        });
    }
    lastChecked = this;
    
}


checkboxes.forEach(checkbox => checkbox.addEventListener('click', handlecheck))
