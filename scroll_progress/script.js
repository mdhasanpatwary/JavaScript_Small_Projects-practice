
const scrollProgress = function(obj) {
    let resets = {
        from: 'left',
        height: '8px',
        position: 'fixed',
        background: 'pink',
        progressBarPosition: 'top',
    }

    let options = Object.assign(resets, obj);
    let progressLine = document.querySelectorAll('.progress-line');

    document.addEventListener('scroll', function() {
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        
        let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        
        let scrolled = (winScroll / scrollHeight) * 100;
        
        
        for(let i = 0; i < progressLine.length; i++) {
            progressLine[i].setAttribute('style', 'width:' + scrolled + '%; height:' + options.height + ';' + options.from + ': 0; position:' + options.position + '; background: ' + options.background + ';' + options.progressBarPosition + ': 0;');
        }
        
        
    });
}


scrollProgress({
    progressBarPosition: 'top',
    background: 'yellow'

});






























/*
var scrollProgress = function(obj) {
    let resets = {
        background   : '#3498db',
        height       : '8px',
        status       : 'fixed',
        position     : 'top',
        from         : 'left'
    }
    
    let options = Object.assign(resets, obj);
    
  
    let loadLine = document.querySelectorAll('.loading-line');
  
    
  
    window.addEventListener('scroll', function(){

      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      var scrolled = (winScroll / height) * 100;
      
        for (let i = 0; i < loadLine.length; i++){
        loadLine[i].setAttribute('style', 'height: ' + options.height + '; background-color: ' + options.background + '; position: ' + options.status + ';' + options.position + ': 0; width: ' + scrolled + '%;' +  options.from + ': 0;');
      }
      
      
    });
}

scrollProgress({
  background : 'yellow'
});
*/