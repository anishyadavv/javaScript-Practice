
class user {
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(this.username);
    }
}

class teacher extends user{
    constructor(username,password){
        super(username)
        this.password = password
    }

    addcourse(){
        console.log("course is added");
    }
}

const chai = new user("anish");
chai.logMe();
const tea = new teacher("naish","pass");
tea.addcourse();