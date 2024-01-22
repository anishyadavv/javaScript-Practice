array = [3,2,1,4,5,6,9,8,7];

const sortedArray = array.sort((a,b)=>{
    return a-b;
})

console.log(sortedArray);
console.log(array);


Array.prototype.mySort = function(cb){

}