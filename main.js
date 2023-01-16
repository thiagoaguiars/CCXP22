/*function addRedBorder(id){
    element = document.querySelector("#" + id);
    element.style.border = "5px solid red";
}*/

addRedBorder("sabado");

function highlightCard(selector)
{   
    var element = document.querySelector(selector);
    element.classList.toggle("card-highlight");
}