const userDetails = {
    name:'anish',
    age: 22,
    location: 'kerala'
}
const userDetails2 = {
    name:'Manish',
    age: 21,
    location: 'kerala'
}
const userName = function(profession,greet){
    console.log(this.name +" - "+profession+" "+greet);
}

// The call() method allows you to call a function with a specified
// 'this' value and arguments.
// It's helpful when you want to use a method from one object in the
// context of another object.

userName.call(userDetails,"software Engineer");
userName.call(userDetails2, "Army officer");

// The apply() method is similar to call(). It allows you to call a
// function with a specified 'this' value and arguments as an array or
// array-like object.

userName.apply(userDetails,["software Engineer","hello"]);
userName.apply(userDetails2,["Army officer","how"]);



// The bind() method creates a new function with a specified 'this'
// value and optional initial arguments.
// This method doesn't call the function immediately, instead, it
// returns a new function with the bound context, allowing you to
// call it later.

let fun = userName.bind(userDetails, "software Engineer","hello");
fun();