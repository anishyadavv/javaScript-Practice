
// const customForEach = (array)=>{
//     for(let i=0; i<array.length;i++){
//         console.log(array[i]);
//     }
// }
Array.prototype.name = "anish";
const array = [1,2,3,4,5,6];

// customForEach(array);

Array.prototype.customForEach = function(callback){

    for(let i in this){
        callback(this[i],i,this);
    }
}

array.customForEach((element,i)=>{
    console.log(element);
})


Array.prototype.forEachTwo = function(callback){

    if(typeof callback !== "function")
        throw `This is not a function`

    for(let i in this){
        if(this.hasOwnProperty(i))
            callback(this[i],i,this);
    }
}


array.forEachTwo((e)=>{
    console.log(e);
})