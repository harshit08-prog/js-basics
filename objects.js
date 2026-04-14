//object literals
const sym = Symbol("unique");
const user = {
    name : "harsh",
    age : 18,
    isLoggedin : false,
    LastLoginDays : ["monday" ,"saturday" ,"friday"],
    "Email" : "harsh@google.com",
    [sym] : "this"
}
//accesing methods
console.log(user.name);
console.log(user["name"]);//this is better when we have to access the property dynamically
//we can also use variables to access the properties
const key = "Email";
console.log(user[key]);
console.log(user["Email"]);

user.age = 19;
Object.freeze(user);
user.age = 20;//it will not change the value of age because we have frozen the object
console.log(user);
const jsuser = {
    greeting : function(){
        console.log("hello user");
    }
}
console.log(jsuser.greeting()); 
//string interpolation
user.greetingtwo = function(){
    console.log(`hello ${this.name}`);
}