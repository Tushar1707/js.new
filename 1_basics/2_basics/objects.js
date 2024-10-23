// / singleton
// object literals
// const mysym = Symbol("key")

// const jsuser ={

//     name: "Varun",
//     "full name ": "varun Chaudhary",
//     age:23,
//     [mysym] : "key1",
//     occupation: "Software Engineer",
//     hobbies: ["reading", "coding", "gaming"],
//     email: "varun@gmail.com"
// }
// // console.log(jsuser.email);
// // console.log(jsuser["full name "]);
// // console.log(jsuser[mysym]);

// jsuser.email = "varun@gmail.com"
// Object.freeze(jsuser)
// jsuser.email = "varun@chatgpt.com"
// console.log(jsuser);


// const tinderuser  = new Object() // singleton object
// const tinderUser ={} // non-singleton object

// tinderUser.id ="abc123"
// tinderUser.name = "Stark"
// tinderUser.isLoggedIn = false

// console.log(tinderUser);

// const regularuser = {
//     id: "abc123",
//     fullname:{
//         userfullname:{
//             firstname:"John",
//             lastname:"Doe"

//         }
//     }
// }

//console.log(regularuser.fullname.userfullname.firstname);

// const obj1 = {1: "a", 2:"b"}
// const obj2 = {3: "a", 4:"b"}

// //const obj3 = {obj1 , obj2}
// //const obj3 = Object.assign(obj1,obj2)
// const obj3 = {...obj1,...obj2}
// console.log(obj3);

// <----------------------object destructure---------------->

const course ={
    name: "javascript",
    duration: "3 months",
    price: 5000,
    isFree: false,
}
//const {duration: t} = course
const {duration} = course
console.log(duration);

{
    "name" = "Tushar",
    "age" = 25,
    "occupation" = "Software Engineer"


}