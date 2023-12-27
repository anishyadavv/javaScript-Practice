

const sum = (n)=>{
    let sum =0;

    for(let i=0;i<n;i++){
        sum+=i;
    }

    return sum;
}


function memoiz(fn){

    let cache ={};

    return function sum(...arg){
        if(arg in cache){
            console.log('cached')
            return cache[arg];
        }
        else{
            console.log('calculation occuring first time');
            cache[arg]=fn(...arg);
            return cache[arg];
        }
    }

}

const efficientsum = memoiz(sum);

console.time();
console.log(efficientsum(1000));
console.timeEnd();

console.time();
console.log(efficientsum(1000));
console.timeEnd();