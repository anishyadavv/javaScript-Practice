const array = [1,4,5,"Banana", 6,1,4,4,9,3,"Banana"]

const unique = array.filter((element,index)=>{
    return array.indexOf(element) === index;
})

console.log(unique);