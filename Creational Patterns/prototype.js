class User{
    constructor(name,age,role){
        this.name=name;
        this.age=age;
        this.role=role;
    }
    clone(){
        return new User(this.name, this.age, this.role)
    }
}
const user1 = new User('essam',25,'developer')
const clonedUser=user1.clone()
console.log(clonedUser);
console.log(user1 === clonedUser);