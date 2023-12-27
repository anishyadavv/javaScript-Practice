
const array = [1,2,3,4,5]

Array.prototype.newFunction = "anish";

// print original properties of object
for(let i in array){
    // if(array.hasOwnProperty(i))
    console.log(i);
}