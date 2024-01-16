const button = document.getElementsByClassName("button")[0];
const close = document.getElementById("close");
const popover = document.getElementsByClassName("popover")[0];

button.addEventListener("click",()=>{
    popover.classList.toggle("display");
});

close.addEventListener("click",()=>{
    popover.classList.remove("display");
});