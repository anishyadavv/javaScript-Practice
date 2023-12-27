
function setUsername(username) {
    console.log("called");
    this.username = username;
}
function createUser(username, password, email){
    setUsername.call(this,username);
    this.password = password
    this.email = email
}
const user = new createUser("anish","1234","anish@geeks.com");

console.log(user);