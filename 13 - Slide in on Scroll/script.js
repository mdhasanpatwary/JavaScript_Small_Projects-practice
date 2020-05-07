function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  const sliderImg = document.querySelectorAll('.slide-in');

function checkSlide(e) {
    
    sliderImg.forEach(slideImg => {
        //Half way through the image
        const slideInAt = (window.scrollY + window.innerHeight) - slideImg.height / 2;
        
        //Bottom of the Image
        const imgBottom = slideImg.offsetTop + slideImg.height;

        const isHalfShown = slideInAt > slideImg.offsetTop;
        const isNotScrolledPast = window.scrollY < imgBottom;

        if(isHalfShown && isNotScrolledPast) {
            slideImg.classList.add('active');
        } else {
            slideImg.classList.remove('active');
        }
    });
}


  document.addEventListener('scroll', debounce(checkSlide));