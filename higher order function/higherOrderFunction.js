const radius = [3,4,2,6];



const area = function(radius){
    return Math.PI*radius*radius;
}

const circumference = function(radius){
    return 2*Math.PI*radius;
}
const diameter = function(radius){
    return 2*radius;
}

function calculate(radius,logic){
    const output = [];
    radius.forEach(element => {
        output.push(logic(element).toPrecision(3));
    });
    return output;
}

console.log(calculate(radius,area));
console.log(calculate(radius,circumference));
console.log(calculate(radius,diameter));
