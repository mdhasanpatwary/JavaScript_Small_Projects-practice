
(function() {
    //Variables
    let bor_top_left = document.querySelectorAll(".borr-1"),
        bor_top_right = document.querySelectorAll(".borr-2"),
        bor_bottom_left = document.querySelectorAll(".borr-3"),
        bor_bottom_right = document.querySelectorAll(".borr-4"),
        bor_all = document.querySelectorAll(".hpnumput"),
        bor_check = document.querySelectorAll(".hpcheckbox"),
        element = document.querySelector(".box");


    //TOP LEFT
    for(let x of bor_top_left) {
        x.addEventListener('change', function() {
            //element.style.cssText = "border-top-left-radius: " + x.value + "px;";
            element.setAttribute('style', element.style.cssText + ' border-top-left-radius: ' + x.value + 'px;');
        })
    }

    //TOP RIGHT
    for(let x of bor_top_right) {
        x.addEventListener('change', function() {
            //element.style.cssText = "border-top-right-radius: " + x.value + "px;";
            element.setAttribute('style', element.style.cssText + ' border-top-right-radius: ' + x.value + 'px;');
        })
    }

    //BOTTOM LEFT
    for(let x of bor_bottom_left) {
        x.addEventListener('change', function() {
            //element.style.cssText = "border-bottom-left-radius: " + x.value + "px;";
            element.setAttribute('style', element.style.cssText + ' border-bottom-left-radius: ' + x.value + 'px;');
        })
    }

    //BOTTOM RIGHT
    for(let x of bor_bottom_right) {
        x.addEventListener('change', function() {
            //element.style.cssText = "border-bottom-right-radius: " + x.value + "px;";
            element.setAttribute('style', element.style.cssText + ' border-bottom-right-radius: ' + x.value + 'px;');
        })
    }

      // ALL TOGETHER IF CHECKED
    for (let x of bor_check ) {
      x.addEventListener('change', function(){
        if (x.checked){
            for (let i = 0; i < bor_all.length; i++){
              
              bor_all[i].addEventListener('change', function(){
                
                element.setAttribute('style', 
                                    element.style.cssText + 
                                    'border-top-left-radius: ' + this.value + 'px; \
                                    border-top-right-radius: ' + this.value + 'px; \
                                    border-bottom-left-radius: ' + this.value + 'px; \
                                    border-bottom-right-radius: ' + this.value + 'px;');
              
                let GValue = this.value;
                for (let i = 0; i < bor_all.length; i++) {
                  bor_all[i].value = GValue
                }

              });
            }
        }
      })
    }


    
})()
















/*
(function(){
  
    let bor_top_left = document.querySelectorAll('.borr-1'),
        bor_top_right = document.querySelectorAll('.borr-2'),
        bor_bottom_left = document.querySelectorAll('.borr-3'),
        bor_bottom_right = document.querySelectorAll('.borr-4'),    
        bor_all = document.querySelectorAll('.hpnumput'),
        bor_check = document.querySelectorAll('.hpcheckbox'),
        element = document.querySelector('.box');
    
    // TOP LEFT
    for (let x of bor_top_left) {
      x.addEventListener('change', function(){
        element.setAttribute('style', element.style.cssText + ' border-top-left-radius: ' + x.value + 'px;')
      })
    }
    // TOP RIGHT
    for (let x of bor_top_right) {
      x.addEventListener('change', function(){
        element.setAttribute('style', element.style.cssText + ' border-top-right-radius: ' + x.value + 'px;')
      })
    }
    // BOTTOM LEFT
    for (let x of bor_bottom_left) {
      x.addEventListener('change', function(){
        element.setAttribute('style', element.style.cssText + ' border-bottom-left-radius: ' + x.value + 'px;')
      })
    }
    // BOTTOM RIGHT
    for (let x of bor_bottom_right) {
      x.addEventListener('change', function(){
        element.setAttribute('style', element.style.cssText + ' border-bottom-right-radius: ' + x.value + 'px;')
      })
    }
    
    // ALL TOGETHER IF CHECKED
    for (let x of bor_check ) {
      x.addEventListener('change', function(){
        if (x.checked){
            for (let i = 0; i < bor_all.length; i++){
              
               bor_all[i].addEventListener('change', function(){
                
                element.setAttribute('style', 
                                     element.style.cssText + 
                                     'border-top-left-radius: ' + this.value + 'px; \
                                     border-top-right-radius: ' + this.value + 'px; \
                                     border-bottom-left-radius: ' + this.value + 'px; \
                                     border-bottom-right-radius: ' + this.value + 'px;');
              
                let GValue = this.value;
                for (let i = 0; i < bor_all.length; i++) {
                  bor_all[i].value = GValue
                }
  
              });
            }
        }
      })
    }
    
  }())

  */