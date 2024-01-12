const array = [1,2,3,4,5];

Array.prototype.myFilter = function(cb){
    const output = [];

    this.forEach(element=>{if(cb(element))output.push(element);} );
    return output;
}


const ans = array.myFilter(element=> element==2);
console.log(ans);