'use strict'
 const readMoreButton = document.querySelector(".read-more");
 const hiddenBlockQuotes = document.querySelector(".more-content");



 readMoreButton.addEventListener("click",function(){
console.log("button clicked");
if(hiddenBlockQuotes.classList.contains('more-content')){
    hiddenBlockQuotes.classList.remove('more-content');
} 
 else{
    hiddenBlockQuotes.classList.add('more-content');
 }
console.log("click");
})
//This script is used to show and hide the more-content section.