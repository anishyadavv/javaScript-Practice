function fib(length){
    const arr = [0,1];

    for(let i=2; i<length; i++){
        arr.push(arr[i-1]+arr[i-2]);
    }
    console.log(arr);
}
fib(7)

