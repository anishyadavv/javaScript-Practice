var strings= "anish";
const reversed = strings.split("").reverse().join("");

console.log(reversed);


let reverseString = "";

for(let i=strings.length-1; i>=0; i--){
    reverseString += strings[i];
}

console.log(reverseString);