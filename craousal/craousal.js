const left = document.getElementById('left');
const right = document.getElementById('right');
const slides = document.getElementsByClassName("slides");
let count = 0;
display(count);

left.addEventListener('click',function(){
     count--;
    if (count < 0) {
    count = slides.length - 1;
    }
    display(count);
})

right.addEventListener("click", function () {
    count++;
    if (count > slides.length - 1) {
      count = 0;
    }
    display(count);
});

function display(n){

    for(let i=0;i<slides.length;i++){
        slides[i].style.display = 'none';
    }
    slides[n].style.display = 'block';

}