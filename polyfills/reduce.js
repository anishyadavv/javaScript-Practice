const array = [1,2,3,4,5];

const ans = array.reduce((acc,curr)=>{
    acc.push(curr);
    return acc;
},[])

console.log(ans);

Array.prototype.myReduce = function(cb,initialValue){
    let accumulator = initialValue;

    for(let i=0;i<this.length;i++){
        accumulator = accumulator?cb(accumulator,this[i],i,this):this[i];
    }

    return accumulator;
}
const ans1 = array.myReduce((acc,curr)=>{
    acc.push(curr);
    return acc;
},[])

console.log(ans1);