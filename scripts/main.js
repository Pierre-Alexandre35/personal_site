const project = document.querySelectorAll(".project");

const curtain = document.querySelector("#project-popup");

const close = document.querySelector(".arrows-down");

const projectContainer = document.querySelector(".project-container");


project.forEach((project)=>{
    project.addEventListener("click", e =>{
        toggleModal();
    })
});







const fields = document.querySelectorAll(".moving-field");


fields.forEach(field =>{
    field.addEventListener("click", e =>{
        console.log(field.children[1].classList.add('move-up'));
    })
})


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});



let lastScrool;

const navbar  = document.querySelector("nav");

window.addEventListener("scroll", e =>{
    var current = window.pageYOffset;
    if(current > lastScrool){
        navbar.style.opacity = "0";
    }
    else{
        navbar.style.opacity = "1";

    }
    lastScrool = current;
})



const modalTriggerButton = document.querySelector(".open-modal");

const modal = document.querySelector("#modal");

const modalClose = document.querySelector(".close-modal");



modalTriggerButton.addEventListener("click", e =>{
    toggleModal();
});

modalClose.addEventListener("click", e =>{
    toggleModal();
});

modal.addEventListener("click", e => {
    if(e.currentTarget === e.target){
        toggleModal();
    }
});


function toggleModal(){
    if(window.getComputedStyle(modal).display === "flex"){
        modal.classList.add("modal-hide");
        setTimeout(() =>{
            modal.style.display = "none";
            modal.classList.remove("modal-show", "modal-hide");
            document.body.style.overflow = "initial";
        },550)
    } else {
        console.log("ee")
        modal.style.display = "flex";
        modal.classList.add("modal-show");
        /**document.body.style.overflow = "hidden";*/
    }
}

const burger = document.querySelector(".burger");

const navitems = document.querySelector("nav #nav-sections");

burger.addEventListener("click", e=>{
    if(navitems.style.display === "none"){
        navitems.style.display="flex"
    } else{
        navitems.style.display="none"

    }
})
