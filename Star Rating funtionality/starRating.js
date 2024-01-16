let output = 0;
let stars = document.getElementsByClassName('star');
let rating = document.getElementById("rating");
function star(n){
    remove();
    for(let i=0;i<n-1;i++){
        stars[i].className = "star blue";
    }
    stars[n-1].className = "star red";
    rating.innerHTML = `Rating is : ${n}/5`;
}

function remove(){
    for(let i=0;i<5;i++){
        stars[i].className = "star";
    }
}