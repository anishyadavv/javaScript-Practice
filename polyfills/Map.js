

const array = [1,2,3,4,5];


Array.prototype.myMap = function(cb){
    const output=[];
    for(let i=0;i<this.length;i++){
        output.push(cb(this[i]));
    }
    return output;
}

const mul = function(e){
    return 2*e;
}

const ans = array.myMap((e)=>(2*e));
console.log(ans);