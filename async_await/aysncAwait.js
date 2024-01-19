




// const p = new Promise((resolve, reject)=>{
//     resolve("Promise is resolved");
// })


// async function getData(){


//     return p;
// }

// const dataPromise = getData();

// dataPromise.then(res=>console.log(res));


// const p = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("resolved");
//     },3000);
// })

// // async function getData(){
// //     const val = await p;// js engine waits here for 3 seconds to resolve promise
// //     console.log(val);
// //     console.log("hello anish");
// // }

// function getData(){
//     p.then(res=>console.log(res));
//     console.log('hello anish');// this is printed first 
// }
// getData();


const p1 = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve("promise1 resolved");
    },10000);
});

const p2 = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve("promise2 rejected");
    },5000);
});

async function getData(){

    console.log("hello world");
    const val = await p1; // getData funcition is suspended until p1 is resolved
    console.log("hello anish");

    const val2 = await p2;
    console.log("hello again anish");

}
// getData();


async function getGithubData(){

    try {
        const response = await fetch(
          "https://api.github.com/users/anishyadavv"
        );
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

// getGithubData();














