let output = 0;
let stars = document.getElementsByClassName('star');
let rating = document.getElementById("rating");
function star(n){
    remove();
    for(let i=0;i<n;i++){
        if(n==1) cls = "one";
        else if(n==2) cls = "two";
        else if(n==3) cls = "three";
        else if(n==4) cls = "four";
        else if(n==5) cls = "five";
        stars[i].className = "star "+cls;
    }
    rating.innerHTML = `Rating is : ${n}/5`;
}

function remove(){
    for(let i=0;i<5;i++){
        stars[i].className = "star";
    }
}