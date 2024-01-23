
// "use strict";
// console.log(this); // returns window object in Brower and {} global object in node

function abc(){

    console.log(this);// returns window object in non strict mode
    // returns undefined strict mode
}
// abc();


const obj1 = {
    x: 30,
    y: function(){
        console.log(this);
    }
}

// obj1.y();// returns obj1

const obj2 = {
    x:10,
    y: ()=>{
        console.log(this);
    }
}

// obj2.y(); // returns window object which is lexical environment of obj2



// obj1.y.call(obj2);

