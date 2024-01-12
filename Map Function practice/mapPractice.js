const users = [
  { firstName: "anish", lastname: "saini", age: 26 },
  { firstName: "john", lastname: "doe", age: 30 },
  { firstName: "emma", lastname: "smith", age: 25 },
  { firstName: "alex", lastname: "brown", age: 35 },
  { firstName: "sara", lastname: "jones", age: 28 },
  { firstName: "michael", lastname: "wilson", age: 32 },
  { firstName: "olivia", lastname: "martinez", age: 29 },
  { firstName: "david", lastname: "taylor", age: 31 },
  { firstName: "chloe", lastname: "miller", age: 27 },
  { firstName: "samuel", lastname: "anderson", age: 34 },
  { firstName: "lily", lastname: "harris", age: 26 },
  { firstName: "benjamin", lastname: "clark", age: 33 },
  { firstName: "zoey", lastname: "wright", age: 28 },
  { firstName: "isaac", lastname: "robinson", age: 30 },
  { firstName: "grace", lastname: "thompson", age: 29 },
];

// You can use this array with 15 objects in your code
// const fullnames = users.filter(user=>user.age> 30).map(user=>user.firstName+" "+user.lastname)

//acc = {26:2,75:1,50:1}

const output = users.reduce((acc,curr)=>{
    //acc = {};

    if(curr.age in acc){
        acc[curr.age] = acc[curr.age] +1;
    }
    else{
        acc[curr.age] = 1;
    }
    return acc;
},{});

// console.log(output);
let sum=0;
for(var i in output){
    sum+=output[i];
}
// console.log(sum);

const ans =  users.reduce((acc,curr)=>{
    if(curr.age>30){
        acc.push(curr.firstName);
    }

    return acc;
},[]);

console.log(ans);