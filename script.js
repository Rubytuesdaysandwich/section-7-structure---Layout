'use strict'
 let readMoreButton = document.getElementsByClassName(".read-more")
 let hiddenBlockQuotes = document.getElementById("more-content")

 hiddenBlockQuotes.style.display="none"
 
readMoreButton.addEventListener('click',()=>{

    hiddenBlockQuotes.style.display="block"

})