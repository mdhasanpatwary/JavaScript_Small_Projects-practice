replaceText(document.body);

function replaceText(element) {
    if(element.hasChildNodes()) {
        element.childNodes.forEach(replaceText)
    } else if(element.nodeType === Text.TEXT_NODE) {
        if(element.textContent.match(/coronavirus|corona|virus/gi)) {
            const newElement = document.createElement('span')
            newElement.innerHTML = element.textContent.replace(/(coronavirus|corona|virus)/gi, '<span class="rainbow">$1</span>')
            element.replaceWith(newElement)

            //element.parentElement.remove();
        }


        //element.textContent = element.textContent.replace(/coronavirus/gi, "😫");
    }
}



// replaceText(document.body)

// function replaceText(element) {
//   if (element.hasChildNodes()) {
//     element.childNodes.forEach(replaceText)
//   } else if (element.nodeType === Text.TEXT_NODE) {
//     if (element.textContent.match(/coronavirus/gi)) {
//       const newElement = document.createElement('span')
//       newElement.innerHTML = element.textContent.replace(/(coronavirus)/gi, '$1')
//       element.replaceWith(newElement)
//     }
//   }
// }