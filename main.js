const project = document.querySelectorAll(".project");

const curtain = document.querySelector("#project-popup");

const close = document.querySelector(".arrows-down");

const projectContainer = document.querySelector(".project-container");

project.forEach((project)=>{
    project.addEventListener("click", e =>{
        projectContainer.setAttribute("style", "display:block");
        curtain.setAttribute("style","top: 15%");
    })
});


close.addEventListener("click", e =>{
    curtain.setAttribute("style","top: 110%");

});