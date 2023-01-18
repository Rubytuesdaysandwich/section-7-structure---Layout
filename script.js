'use strict'
 const readMoreButton = document.querySelector(".read-more");
 const hiddenBlockQuotes = document.querySelector(".more-content");


//  hiddenBlockQuotes.style.display="none";

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
