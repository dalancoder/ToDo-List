/* ------------------------------------------------------ */
/*                        Variables                       */
/* ------------------------------------------------------ */
const cards = document.querySelector(".cards");
const deleteAll = document.querySelector("deleteAll");
const inputText = document.querySelector("inputText");
const select = document.querySelector("select");
const btn = document.querySelector("btn");


    if(inputText.value == '' ){
        btn.disabled=true;
    }
    
deleteAll.style.backgroundColor ="red";

inputText.focus();
