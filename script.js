'use strict'
 const readMoreButton = document.querySelector(".read-more");
 const hiddenBlockQuotes = document.querySelector("#more-content");


//  hiddenBlockQuotes.style.display="none";

 readMoreButton.addEventListener("click",function(){
console.log("button clicked");
if(hiddenBlockQuotes.style.display="none")   
hiddenBlockQuotes.style.display="block";
else{
    hiddenBlockQuotes.style.display="none";
}
})

