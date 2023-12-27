const promise1 = new Promise(function(resolve, reject){


    setTimeout(function(){
        console.log("promise1 runed");
        resolve();
    },1000)
})

promise1.then(function(){
    console.log("promise1 resolved");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("promise2 runed");
        resolve();
    },3000)
}).then(function(){
    console.log("promise2 resolved");
})


const promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("promise3 runed");
        resolve({name:'anish',email:"anish@gmail.com"});
    },2000)
})

promise3.then(function(user){
    console.log("promise3 resolved ",user);
})


const promiseo4  = new Promise (function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({name:"anish",email:"anish@gmail.com"});
        }
        else{
            reject("something went wrong");
        }
    },5000)
})

promiseo4.then(function(response){
    console.log("userData - ",response);   
});

promiseo4.catch(function(error){
        console.log("error - ",error);
});