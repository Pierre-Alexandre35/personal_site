function toggleNav(){
    console.log("dds")
        items = document.querySelectorAll(".items");
        for (i = 0; i < items.length; ++i) {
            items[i].classList.toggle("show");
          }
        list = document.querySelector("nav ul li")
        list.classList.toggle("hide");

}


function navEffet(){
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

}


const app = () =>{
    navEffet();
}


app()