"use strict"; //treat all JS code as newer version
// alert(3+3) we are using nodejs , not browser

// data types---->
// num => 2 to power 53
// BigInt
// string
// boolean
// null => standalone value
// undefined =>
// Symbol =>unique


// object => array, function, object, date, regExp, set, map, weakMap


// <------------Primitive datatypes---------->

// 7 types : String , Number , Boolean , NULL , undefined, Symbol, Bigint
// primitive datatypes are immutable




// <---------------Refrence (Non primitive)------------------>

// Array , Object , functions

// <---------stack(primitive)---------Heap(Non-primitive)--------->
// primitive data types are stored in stack

let Myyoutube = "tushar"
let anothermytube = "chai code"
console.log(Myyoutube);
console.log(anothermytube);

let userone = {
    name: "tushar",
    age: 25,
    occupation: "software engineer",
}
let usertwo = userone

usertwo.age = 56
console.log(userone.age);
console.log(usertwo.age);






