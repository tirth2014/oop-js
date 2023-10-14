class User{
    static id = 1;
    
    constructor(name, age){
        this.id = User.id++
        this.name = name;
        this.age = age;
    }

    // static compareAge(user1,user2){
    //     return user1.age - user2.age
    // }
}

alice = new User("Alice", 24);
tirth = new User("Tirth", 23);
john = new User("John", 30);

users = [alice,tirth,john]
console.log(users);
// users.sort(User.compareAge);
