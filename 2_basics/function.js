function saymyname(){
    console.log("My name is John");
}
saymyname();

// function addtwonum(num1 ,num2){
// console.log(num1+num2);
// }
// addtwonum(5,7);


// function  addtwonum(num1,num2){
//     return num1+num2;
// }
// const res = addtwonum(3,4)
// console.log("result : ",res);

// function loginuserMessage(username){
//     if(username == undefined){
//         console.log("Please enter your username");
//          return
//     }
//     return  `${username} just logged in`
// }
// // console.log(loginuserMessage("Tushar"));
// console.log(loginuserMessage());


function calculate(...num1){
    return num1
}
console.log(calculate(5,5,6,8,9));