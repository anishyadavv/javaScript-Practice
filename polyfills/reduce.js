const array = [1,2,3,4,5];

Array.prototype.reduce(cb(accumulator,currentvalue),initialValue){
    let output;
    if(initialValue){
        accumulator=initialValue;
    }
    else{
        accumulator=this[0];
    }
    if(!currentvalue && initialValue){
        currentvalue = this[1]
    }
    else if(currentvalue && !initialValue) {
        currentvalue = this[0];
    }

    this.forEach(element => {})

}