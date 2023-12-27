

class User {
    constructor(username,password,email) {
        this.username = username;
        this.password = password;
        this.email = email;
    }

    encryptedPassword() {
        return `${this.username}${this.password}`
    }
    changeUsername() {
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User('anish','password','anish@gmail.com');

console.log(chai);

console.log(chai.encryptedPassword());
console.log(chai.changeUsername());

//now using function

function user(username, password,email) {
    this.username = username;
    this.password = password;
    this.email = email;
}
user.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}
user.prototype.encryptedPassword = function(){
    return `${this.password.toUpperCase()}`
}

const tea = new user('Manish',"pass",'manish@gmail.com');
console.log(tea);
console.log(tea.encryptedPassword());
console.log(tea.changeUsername());